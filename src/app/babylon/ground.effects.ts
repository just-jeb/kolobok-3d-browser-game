import {Inject, Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {finishGroundInitialization, INIT_GAME} from '../store/actions/game-state.actions';
import {Mesh, Scene} from 'babylonjs';
import {DelayedSceneToken} from './injection-tokens';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMapTo';


@Injectable()
export class GroundEffects {

  @Effect()
  initialize$ = this.actions$.ofType(INIT_GAME).switchMapTo(this.scene.do(
    scene => Mesh.CreateGround('ground1', 6, 6, 2, scene)
  ).mapTo(finishGroundInitialization));

  constructor(private actions$: Actions, @Inject(DelayedSceneToken) private scene: Observable<Scene>) {
  }
}
