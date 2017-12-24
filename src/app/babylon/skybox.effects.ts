import {Inject, Injectable} from '@angular/core';
import {Actions} from '@ngrx/effects';
import {CubeTexture, Mesh, Scene, StandardMaterial, Texture, Vector3} from 'babylonjs';
import {DelayedSceneToken} from './injection-tokens';
import {Observable} from 'rxjs/Observable';
import {RenderData} from '../rendering/render-data';
import {Store} from '@ngrx/store';
import {skyboxSelector} from '../skybox/skybox.selector';
import {skyboxRenderData} from '../skybox/skybox.render-data';
import {finishSkyboxInitialization} from '../skybox/actions';
import {BabylonEntity} from './babylon-entity';
import {Skybox} from '../skybox/skybox';

@Injectable()
export class SkyboxEffects extends BabylonEntity<Skybox> {
  protected update(mesh: Mesh, skybox: Skybox): void {
    mesh.rotation.x = skybox.rotation.x;
    mesh.rotation.y = skybox.rotation.y;
    mesh.rotation.z = skybox.rotation.z;
  }

  protected setUpMaterial(material: StandardMaterial, scene: Scene, renderData: RenderData): void {
    if (renderData.reflectionTexture) {
      material.reflectionTexture = new CubeTexture(renderData.reflectionTexture, scene);
      material.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE;
    }
    material.backFaceCulling = false;
  }

  protected createMesh(scene: Scene, skybox: Skybox): Mesh {
    const box = Mesh.CreateBox('skyBox', skybox.size, scene);
    box.position = new Vector3(skybox.position.x, skybox.position.y, skybox.position.z);
    return box;
  }

  protected get materialName() {
    return 'skyboxMaterial';
  }

  protected get renderData() {
    return skyboxRenderData;
  }

  protected get finishInitializationAction() {
    return finishSkyboxInitialization;
  }

  constructor(actions$: Actions, @Inject(DelayedSceneToken) scene: Observable<Scene>, store: Store<any>) {
    super(actions$, store, scene, skyboxSelector);
  }
}
