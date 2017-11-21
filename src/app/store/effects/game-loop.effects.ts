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
import {START_GAME} from '../actions/game-state.actions';

@Injectable()
export class GameLoopEffects {

  @Effect() updateAndRender$ = Observable
    .zip(this.actions$.ofType(NEXT_FRAME).take(1), this.actions$.ofType(DONE_RENDERING, START_GAME).take(1))
    .mergeMapTo(Observable.from([updateWorld, render]))
    .repeat();

  constructor(private actions$: Actions) {
  }


}
