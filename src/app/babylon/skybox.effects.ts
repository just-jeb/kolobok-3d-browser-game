import {Inject, Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {INIT_GAME} from '../store/actions/game-state.actions';
import {Color3, CubeTexture, Mesh, Scene, StandardMaterial, Texture, Vector3} from 'babylonjs';
import {DelayedSceneToken} from './injection-tokens';
import {Observable} from 'rxjs/Observable';
import {combineLatest, mapTo, switchMapTo, take} from 'rxjs/operators';
import {RenderData} from '../rendering/render-data';
import {Store} from '@ngrx/store';
import {skyboxSelector} from '../skybox/skybox.selector';
import {skyboxRenderData} from '../skybox/skybox.render-data';
import {finishSkyboxInitialization} from '../skybox/actions';

@Injectable()
export class SkyboxEffects {
  private skybox = this.store.select(skyboxSelector);

  @Effect()
  initialize$ = this.actions$.ofType(INIT_GAME).pipe(
    switchMapTo(this.scene.pipe(
      combineLatest(this.skybox.pipe(take(1)), (scene, skybox) => {
        // Let's try our built-in 'sphere' shape. Params: name, subdivisions, size, scene
        const box = Mesh.CreateBox('skyBox', skybox.size, scene);

        box.position = new Vector3(skybox.position.x, skybox.position.y, skybox.position.z);

        // TODO: move render initialization to separate class
        this.render(scene, box, skyboxRenderData);
      }),
      mapTo(finishSkyboxInitialization)
    )));

  // TODO: refactor
  private render(scene: Scene, mesh: Mesh, data: RenderData) {
    const material = new StandardMaterial('skyboxMaterial', scene);

    material.backFaceCulling = false;

    if (data.diffuseTexture) {
      material.diffuseTexture = new Texture(data.diffuseTexture, scene);
    }
    if (data.reflectionTexture) {
      material.reflectionTexture = new CubeTexture(data.reflectionTexture, scene);
    }

    material.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE;
    if (data.ambientColor) {
      material.ambientColor = new Color3(data.ambientColor.r, data.ambientColor.g, data.ambientColor.b);
    }
    if (data.diffuseColor) {
      material.diffuseColor = new Color3(data.diffuseColor.r, data.diffuseColor.g, data.diffuseColor.b);
    }
    if (data.emissiveColor) {
      material.emissiveColor = new Color3(data.emissiveColor.r, data.emissiveColor.g, data.emissiveColor.b);
    }
    if (data.specular) {
      if (data.specular.color) {
        material.specularColor = new Color3(data.specular.color.r, data.specular.color.g, data.specular.color.b);
      }
      if (data.specular.power) {
        material.specularPower = data.specular.power;
      }
    }

    mesh.material = material;
  }

  constructor(private actions$: Actions, @Inject(DelayedSceneToken) private scene: Observable<Scene>, private store: Store<any>) {
  }
}
