import {Inject, Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {finishGroundInitialization, INIT_GAME} from '../store/actions/game-state.actions';
import {Mesh, Scene} from 'babylonjs';
import {DelayedSceneToken} from './injection-tokens';
import {Observable} from 'rxjs/Observable';
import {mapTo, switchMapTo, tap} from 'rxjs/operators';


@Injectable()
export class GroundEffects {

  @Effect()
  initialize$ = this.actions$.ofType(INIT_GAME).pipe(
    switchMapTo(this.scene.pipe(
      tap(scene => Mesh.CreateGround('ground1', 6, 6, 2, scene)),
      mapTo(finishGroundInitialization)
    )));

  constructor(private actions$: Actions, @Inject(DelayedSceneToken) private scene: Observable<Scene>) {
  }
}
