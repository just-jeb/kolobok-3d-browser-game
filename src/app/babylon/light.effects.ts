import {Inject, Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {finishLightInitialization, INIT_GAME} from '../store/actions/game-state.actions';
import {HemisphericLight, Scene, Vector3} from 'babylonjs';
import {DelayedSceneToken} from './injection-tokens';
import {Observable} from 'rxjs/Observable';
import {mapTo, switchMapTo, tap} from 'rxjs/operators';


@Injectable()
export class LightEffects {

  @Effect()
  initialize$ = this.actions$.ofType(INIT_GAME).pipe(
    switchMapTo(this.scene.pipe(
      tap(
        scene => {
          // This creates a light, aiming 0,1,0 - to the sky.
          const light = new HemisphericLight('light1', new Vector3(0, 1, 0), scene);

          // Dim the light a small amount
          light.intensity = .5;
        }
      ),
      mapTo(finishLightInitialization)
    )));

  constructor(private actions$: Actions, @Inject(DelayedSceneToken) private scene: Observable<Scene>) {
  }
}
