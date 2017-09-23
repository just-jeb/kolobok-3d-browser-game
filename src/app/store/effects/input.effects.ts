import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {KEY_DOWN, KeyboardEventAction} from '../actions/input.actions';

@Injectable()
export class InputEffects {

  @Effect() login$ = this.actions$
  // Listen for the 'LOGIN' action
    .ofType(KEY_DOWN).map((keyDownAction: KeyboardEventAction) => console.log(keyDownAction));

  constructor(
              private actions$: Actions) {
  }


}
