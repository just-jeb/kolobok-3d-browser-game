import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {
  FINISH_CAMERA_INITIALIZATION,
  FINISH_GAME_BOOTSTRAP,
  FINISH_GAME_INITIALIZATION,
  FINISH_GROUND_INITIALIZATION,
  FINISH_KOLOBOK_INITIALIZATION,
  FINISH_LIGHT_INITIALIZATION,
  finishGameInitialization,
  initGame,
  startGame
} from '../actions/game-state.actions';
import {combineLatest} from 'rxjs/observable/combineLatest';
import {mapTo} from 'rxjs/operators';


@Injectable()
export class GameStateEffects {
  @Effect()
  initGame$ = this.actions$.ofType(FINISH_GAME_BOOTSTRAP).pipe(mapTo(initGame));

  @Effect()
  finishInitialization = combineLatest(
    this.actions$.ofType(FINISH_KOLOBOK_INITIALIZATION),
    this.actions$.ofType(FINISH_GROUND_INITIALIZATION),
    this.actions$.ofType(FINISH_LIGHT_INITIALIZATION),
    this.actions$.ofType(FINISH_CAMERA_INITIALIZATION)
  ).pipe(mapTo(finishGameInitialization));

  @Effect()
  startGame$ = this.actions$.ofType(FINISH_GAME_INITIALIZATION).pipe(mapTo(startGame));

  constructor(private actions$: Actions) {
  }
}
