import {Inject, Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {START_GAME, STOP_GAME} from '../store/actions/game-state.actions';
import {Engine} from 'babylonjs';
import {StoreService} from '../store/store.service';
import {DelayedEngineToken} from './injection-tokens';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMapTo';

@Injectable()
export class BabylonGameStateEffects {
  @Effect({dispatch: false})
  startGame$ = this.actions$.ofType(START_GAME).switchMapTo(this.engine.do(
    engine => engine.runRenderLoop(() => this.store.nextFrame())
  ));

  @Effect({dispatch: false})
  stopGame$ = this.actions$.ofType(STOP_GAME).switchMapTo(this.engine.do(
    engine => engine.stopRenderLoop()
  ));

  constructor(private actions$: Actions, @Inject(DelayedEngineToken) private engine: Observable<Engine>,
              private store: StoreService) {
  }
}
