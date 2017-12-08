import {Inject, Injectable} from '@angular/core';
import {finishGameInitialization} from '../store/actions/game-state.actions';
import {combineLatest} from 'rxjs/observable/combineLatest';
import {Actions, Effect} from '@ngrx/effects';
import {first, mapTo} from 'rxjs/operators';
import {INITIALIZATION_ACTIONS} from './tokens';

@Injectable()
export class InitializationService {

  @Effect()
  finishInitialization = combineLatest(
    this.initializationActions.map(action => this.actions$.ofType(action))
  ).pipe(first(), mapTo(finishGameInitialization));

  constructor(private actions$: Actions, @Inject(INITIALIZATION_ACTIONS) private initializationActions: string[]) {
  }

}
