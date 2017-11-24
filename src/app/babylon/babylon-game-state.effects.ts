import {Inject, Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {START_GAME, STOP_GAME} from '../store/actions/game-state.actions';
import {Engine} from 'babylonjs';
import {StoreService} from '../store/store.service';
import {DelayedEngineToken} from './injection-tokens';
import {Observable} from 'rxjs/Observable';
import {switchMapTo, tap} from 'rxjs/operators';

@Injectable()
export class BabylonGameStateEffects {
  @Effect({dispatch: false})
  startGame$ = this.actions$.ofType(START_GAME).pipe(
    switchMapTo(this.engine.pipe(
      tap(engine => engine.runRenderLoop(() => this.store.nextFrame()))
    ))
  );

  @Effect({dispatch: false})
  stopGame$ = this.actions$.ofType(STOP_GAME).pipe(
    switchMapTo(this.engine.pipe(
      tap(engine => engine.stopRenderLoop())
    ))
  );

  constructor(private actions$: Actions, @Inject(DelayedEngineToken) private engine: Observable<Engine>,
              private store: StoreService) {
  }
}
