import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {BootstrapAction, finishGameBootstrap} from '../store/actions/game-state.actions';
import {BabylonBootstrapService} from './babylon-bootstrap.service';
import {mapTo, tap} from 'rxjs/operators';


@Injectable()
export class BootstrapEffects {

  @Effect() bootstrap$ = this.actions$
    .ofType<BootstrapAction>(BootstrapAction.Type)
    .pipe(
      tap(action => this.bootstrap.bootstrap(action.canvas)),
      mapTo(finishGameBootstrap)
    );

  constructor(private actions$: Actions, private bootstrap: BabylonBootstrapService) {
  }

}
