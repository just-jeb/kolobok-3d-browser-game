import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {FINISH_GAME_BOOTSTRAP, FINISH_GAME_INITIALIZATION, initGame, startGame} from '../actions/game-state.actions';
import {mapTo} from 'rxjs/operators';


@Injectable()
export class GameStateEffects {
  @Effect()
  initGame$ = this.actions$.ofType(FINISH_GAME_BOOTSTRAP).pipe(mapTo(initGame));

  @Effect()
  startGame$ = this.actions$.ofType(FINISH_GAME_INITIALIZATION).pipe(mapTo(startGame));

  constructor(private actions$: Actions) {
  }
}
