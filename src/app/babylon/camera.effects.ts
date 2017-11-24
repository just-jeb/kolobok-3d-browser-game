import {Inject, Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {BootstrapAction, finishCameraInitialization, INIT_GAME} from '../store/actions/game-state.actions';
import {FreeCamera, Scene, Vector3} from 'babylonjs';
import {DelayedSceneToken} from './injection-tokens';
import {Observable} from 'rxjs/Observable';
import {mapTo, switchMapTo, tap} from 'rxjs/operators';


@Injectable()
export class CameraEffects {
  private canvas: HTMLCanvasElement;

  @Effect({dispatch: false}) bootstrap$ = this.actions$
    .ofType<BootstrapAction>(BootstrapAction.Type)
    .pipe(tap(action => this.canvas = action.canvas));

  @Effect()
  initialize$ = this.actions$.ofType(INIT_GAME).pipe(
    switchMapTo(this.scene.pipe(
      tap(
        scene => {
          // This creates and positions a free camera
          const camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene);
          // This targets the camera to scene origin
          camera.setTarget(Vector3.Zero());

          // This attaches the camera to the canvas
          camera.attachControl(this.canvas, false);
        }
      ),
      mapTo(finishCameraInitialization)
    )));

  constructor(private actions$: Actions, @Inject(DelayedSceneToken) private scene: Observable<Scene>) {
  }
}
