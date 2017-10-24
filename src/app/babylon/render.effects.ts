import {Inject, Injectable} from '@angular/core';
import {Scene} from 'babylonjs';
import {Observable} from 'rxjs/Observable';
import {Actions, Effect} from '@ngrx/effects';
import {doneRendering, RENDER} from '../store/actions/render.actions';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/startWith';

@Injectable()
export class RenderEffects {

  @Effect() render$ = this.actions$
    .ofType(RENDER)
    .startWith({})
    .combineLatest(this.scene, (_, scene) => {
      scene.render();
      return doneRendering;
    });

  constructor(@Inject('DelayedScene') private scene: Observable<Scene>,
              private actions$: Actions) {
  }
}
