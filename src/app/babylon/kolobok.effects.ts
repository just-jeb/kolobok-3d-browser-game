import {Inject, Injectable} from '@angular/core';
import {Actions} from '@ngrx/effects';
import {Mesh, Scene, StandardMaterial, Texture} from 'babylonjs';
import {DelayedSceneToken} from './injection-tokens';
import {Observable} from 'rxjs/Observable';
import {RenderData} from '../rendering/render-data';
import {kolobokRenderData} from '../kolobok/kolobok.render-data';
import {finishKolobokInitialization} from '../kolobok/actions';
import {Store} from '@ngrx/store';
import {Kolobok} from '../kolobok/kolobok';
import {BabylonEntity} from './babylon-entity';
import {kolobokSelector} from '../kolobok/kolobok.selector';


@Injectable()
export class KolobokEffects extends BabylonEntity<Kolobok> {
  protected update(mesh: Mesh, entity: Kolobok): void {
  }
  protected setUpMaterial(material: StandardMaterial, scene: Scene, renderData: RenderData): void {
    if (renderData.reflectionTexture) {
      material.reflectionTexture = new Texture(renderData.reflectionTexture, scene);
    }
  }

  protected createMesh(scene: Scene, kolobok: Kolobok): Mesh {
    const sphere = Mesh.CreateSphere('sphere1', 16, kolobok.diameter, scene);
    sphere.position.y = kolobok.position.y;
    return sphere;
  }

  protected get materialName() {
    return 'kolobokMaterial';
  }

  protected get renderData() {
    return kolobokRenderData;
  }

  protected get finishInitializationAction() {
    return finishKolobokInitialization;
  }

  constructor(actions$: Actions, @Inject(DelayedSceneToken) scene: Observable<Scene>, store: Store<any>) {
    super(actions$, store, scene, kolobokSelector);
  }
}
