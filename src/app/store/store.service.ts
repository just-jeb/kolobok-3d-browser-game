import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from './state';
import {keydown} from './actions/input.actions';
import {nextFrame} from './actions/game-loop.actions';

@Injectable()
export class StoreService {

  constructor(private store: Store<State>) {
  }

  keypress(event: KeyboardEvent) {
    this.store.dispatch(keydown(event));
  }

  nextFrame() {
    this.store.dispatch(nextFrame);
  }

}
