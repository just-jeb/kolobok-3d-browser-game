import {Inject, Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {INIT_GAME} from '../store/actions/game-state.actions';
import {Color3, Mesh, Scene, StandardMaterial, Texture} from 'babylonjs';
import {DelayedSceneToken} from './injection-tokens';
import {Observable} from 'rxjs/Observable';
import {mapTo, switchMapTo, tap} from 'rxjs/operators';
import {RenderData} from '../rendering/render-data';
import {kolobokRenderData} from '../kolobok/kolobok.render-data';
import {finishKolobokInitialization} from '../kolobok/actions';
import {combineLatest} from 'rxjs/observable/combineLatest';
import {StoreService} from '../store/store.service';
import {skyboxSelector} from '../skybox/skybox.selector';


@Injectable()
export class SkyboxEffects {

  @Effect()
  initialize$ = this.actions$.ofType(INIT_GAME).pipe(
    combineLatest(store.select(skyboxSelector)),
    switchMapTo(this.scene.pipe(
      tap(
        scene => {
          // Let's try our built-in 'sphere' shape. Params: name, subdivisions, size, scene
          const box = Mesh.CreateBox("skyBox", _size, sceneManager.Scene);

          // Move the sphere upward 1/2 its height
          sphere.position.y = 1;

          // TODO: move render initialization to separate class
          this.render(scene, sphere, kolobokRenderData);

        }
      ),
      mapTo(finishKolobokInitialization)
    )));

  // TODO: refactor
  private render(scene: Scene, mesh: Mesh, data: RenderData) {
    const material = new StandardMaterial('kolobokMaterial', scene);

    if (data.diffuseTexture) {
      material.diffuseTexture = new Texture(data.diffuseTexture, scene);
    }
    // this.material.bumpTexture = AssetsManager.textures["kolobokBumpTexture"];

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
      material.specularColor = new Color3(data.specular.color.r, data.specular.color.g, data.specular.color.b);
      material.specularPower = data.specular.power;
    }

    mesh.material = material;
  }

  constructor(private actions$: Actions, @Inject(DelayedSceneToken) private scene: Observable<Scene>, private store: StoreService) {
  }
}
