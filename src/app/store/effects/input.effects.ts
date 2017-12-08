import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {KEY_DOWN, KeyboardEventAction} from '../actions/input.actions';
import {map} from 'rxjs/operators';

@Injectable()
export class InputEffects {

  @Effect() login$ = this.actions$
    .ofType(KEY_DOWN).pipe(map((keyDownAction: KeyboardEventAction) => console.log(keyDownAction)));

  constructor(
              private actions$: Actions) {
  }


}
