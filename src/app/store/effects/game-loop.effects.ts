import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {NEXT_FRAME} from '../actions/game-loop.actions';
import {updateWorld} from '../actions/update.actions';
import {DONE_RENDERING, render} from '../actions/render.actions';
import {START_GAME} from '../actions/game-state.actions';
import {from} from 'rxjs/observable/from';
import {mergeMapTo} from 'rxjs/operators';
import {lossyZip} from '../../common/rxjs-operators';

@Injectable()
export class GameLoopEffects {

  @Effect() updateAndRender$ = lossyZip(
    this.actions$.ofType(NEXT_FRAME),
    this.actions$.ofType(DONE_RENDERING, START_GAME)
  ).pipe(
    mergeMapTo(from([updateWorld, render]))
  );

  constructor(private actions$: Actions) {
  }
}
