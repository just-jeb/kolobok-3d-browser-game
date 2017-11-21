import {Inject, Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {finishKolobokInitialization, INIT_GAME} from '../store/actions/game-state.actions';
import {Mesh, Scene} from 'babylonjs';
import {DelayedSceneToken} from './injection-tokens';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMapTo';


@Injectable()
export class KolobokEffects {

  @Effect()
  initialize$ = this.actions$.ofType(INIT_GAME).switchMapTo(this.scene.do(
    scene => {
      // Let's try our built-in 'sphere' shape. Params: name, subdivisions, size, scene
      const sphere = Mesh.CreateSphere('sphere1', 16, 2, scene);

      // Move the sphere upward 1/2 its height
      sphere.position.y = 1;
    }
  ).mapTo(finishKolobokInitialization));

  constructor(private actions$: Actions, @Inject(DelayedSceneToken) private scene: Observable<Scene>) {
  }
}
