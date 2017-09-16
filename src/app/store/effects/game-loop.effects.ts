import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Actions, Effect} from '@ngrx/effects';
import 'rxjs/add/operator/mergeMapTo';
import 'rxjs/add/observable/from';
import {NEXT_FRAME} from '../actions/game-loop.actions';
import {updateWorld} from '../actions/update.actions';
import {render} from '../actions/render.actions';

@Injectable()
export class GameLoopEffects {

  @Effect() updateAndRender$ = this.actions$
    .ofType(NEXT_FRAME)
    .mergeMapTo(Observable.from([updateWorld, render]));

  constructor(private actions$: Actions) {

  }


}
