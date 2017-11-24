import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {NEXT_FRAME} from '../actions/game-loop.actions';
import {updateWorld} from '../actions/update.actions';
import {DONE_RENDERING, render} from '../actions/render.actions';
import {START_GAME} from '../actions/game-state.actions';
import {zip} from 'rxjs/observable/zip';
import {from} from 'rxjs/observable/from';
import {mergeMapTo, repeat, take} from 'rxjs/operators';

@Injectable()
export class GameLoopEffects {

  @Effect() updateAndRender$ = zip(
    this.actions$.ofType(NEXT_FRAME).pipe(take(1)),
    this.actions$.ofType(DONE_RENDERING, START_GAME).pipe(take(1))
  ).pipe(
    mergeMapTo(from([updateWorld, render])),
    repeat()
  );

  constructor(private actions$: Actions) {
  }
}
