import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Actions, Effect} from '@ngrx/effects';
import 'rxjs/add/operator/mergeMapTo';
import 'rxjs/add/observable/from';
import {NEXT_FRAME} from '../actions/game-loop.actions';
import {updateWorld} from '../actions/update.actions';
import {DONE_RENDERING, render} from '../actions/render.actions';
import 'rxjs/add/observable/zip';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/repeat';

@Injectable()
export class GameLoopEffects {

  @Effect() updateAndRender$ = Observable
    .zip(this.actions$.ofType(NEXT_FRAME), this.actions$.ofType(DONE_RENDERING))
    .take(1)
    .mergeMapTo(Observable.from([updateWorld, render]))
    .repeat();

  constructor(private actions$: Actions) {
  }


}
