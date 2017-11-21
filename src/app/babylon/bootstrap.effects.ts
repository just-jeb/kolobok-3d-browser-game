import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {BootstrapAction, finishGameBootstrap} from '../store/actions/game-state.actions';
import {BabylonBootstrapService} from './babylon-bootstrap.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mapTo';


@Injectable()
export class BootstrapEffects {

  @Effect() bootstrap$ = this.actions$
    .ofType<BootstrapAction>(BootstrapAction.Type)
    .do(action => this.bootstrap.bootstrap(action.canvas))
    .mapTo(finishGameBootstrap);

  constructor(private actions$: Actions, private bootstrap: BabylonBootstrapService) {
  }

}
