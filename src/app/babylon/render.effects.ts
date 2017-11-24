import {Inject, Injectable} from '@angular/core';
import {Scene} from 'babylonjs';
import {Observable} from 'rxjs/Observable';
import {Actions, Effect} from '@ngrx/effects';
import {finishRendering, RENDER} from '../store/actions/render.actions';
import {DelayedSceneToken} from './injection-tokens';
import {combineLatest} from 'rxjs/operators';

@Injectable()
export class RenderEffects {

  @Effect() render$ = this.actions$
    .ofType(RENDER)
    .pipe(
      combineLatest(this.scene, (_, scene) => {
        scene.render();
        return finishRendering;
      })
    );

  constructor(@Inject(DelayedSceneToken) private scene: Observable<Scene>,
              private actions$: Actions) {
  }
}
