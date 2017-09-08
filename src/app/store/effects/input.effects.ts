import {Inject, Injectable} from '@angular/core';
import {Engine, Scene} from 'babylonjs';
import {Observable} from 'rxjs/Observable';
import {Actions, Effect} from '@ngrx/effects';
import {KEY_DOWN, KeyboardEventAction} from '../actions/input.actions';

@Injectable()
export class InputEffects {

  @Effect() login$ = this.actions$
  // Listen for the 'LOGIN' action
    .ofType(KEY_DOWN).map((keyDownAction: KeyboardEventAction) => console.log(keyDownAction));

  constructor(@Inject('DelayedEngine') private engine: Observable<Engine>,
              @Inject('DelayedScene') private scene: Observable<Scene>,
              private actions$: Actions) {
    this.engine.subscribe(e => console.log(e));
    this.scene.subscribe(s => console.log(s));
  }


}
