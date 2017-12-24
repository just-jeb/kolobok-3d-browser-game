import {combineLatest, filter, map, mapTo, skip, switchMapTo, take} from 'rxjs/operators';
import {Color3, Mesh, Scene, StandardMaterial, Texture} from 'babylonjs';
import {INIT_GAME} from '../store/actions/game-state.actions';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {RenderData} from '../rendering/render-data';
import {Action, Selector, Store} from '@ngrx/store';

export abstract class BabylonEntity<EntityType> {
  private mesh: Mesh;

  @Effect()
  initialize$ = this.actions$.ofType(INIT_GAME).pipe(
    switchMapTo(this.scene.pipe(
      combineLatest(this.gameEntity.pipe(take(1)), (scene, entity) => {

        this.mesh = this.createMesh(scene, entity);
        this.render(scene);
      }),
      mapTo(this.finishInitializationAction)
    )));

  // TODO: multiproviders, wait for all the updates to finish
  // TODO: fix {dispatch: false} problem
  // TODO: handle undefined case properly (now handled with filter)
  @Effect()
  update$ = this.gameEntity.pipe(filter(e => !!e), skip(1), map(entity => {
    this.update(this.mesh, entity);
    return {type: 'BLAH'};
  }));


  protected abstract createMesh(scene: Scene, gameEntity: EntityType): Mesh;

  protected abstract get materialName(): string;

  protected abstract get renderData(): RenderData;

  protected abstract get finishInitializationAction(): Action;


  private render(scene: Scene) {
    const material = new StandardMaterial(this.materialName, scene);

    if (this.renderData.diffuseTexture) {
      material.diffuseTexture = new Texture(this.renderData.diffuseTexture, scene);
    }
    if (this.renderData.ambientColor) {
      material.ambientColor = new Color3(this.renderData.ambientColor.r, this.renderData.ambientColor.g, this.renderData.ambientColor.b);
    }
    if (this.renderData.diffuseColor) {
      material.diffuseColor = new Color3(this.renderData.diffuseColor.r, this.renderData.diffuseColor.g, this.renderData.diffuseColor.b);
    }
    if (this.renderData.emissiveColor) {
      material.emissiveColor = new Color3(this.renderData.emissiveColor.r,
        this.renderData.emissiveColor.g, this.renderData.emissiveColor.b);
    }
    if (this.renderData.specular) {
      if (this.renderData.specular.color) {
        material.specularColor = new Color3(this.renderData.specular.color.r,
          this.renderData.specular.color.g, this.renderData.specular.color.b);
      }
      if (this.renderData.specular.power) {
        material.specularPower = this.renderData.specular.power;
      }
    }

    this.setUpMaterial(material, scene, this.renderData);

    this.mesh.material = material;
  }

  protected abstract setUpMaterial(material: StandardMaterial, scene: Scene, renderData: RenderData): void;

  protected abstract update(mesh: Mesh, entity: EntityType): void;

  constructor(private actions$: Actions, store: Store<any>, private scene: Observable<Scene>,
              entitySelector: Selector<object, EntityType>, private gameEntity = store.select(entitySelector)) {
  }

}
