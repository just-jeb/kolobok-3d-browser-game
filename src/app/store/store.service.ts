import {Injectable} from '@angular/core';
import {Action, Store} from '@ngrx/store';
import {keydown} from './actions/input.actions';
import {nextFrame} from './actions/game-loop.actions';

@Injectable()
export class StoreService {

  constructor(private store: Store<any>) {
  }

  keypress(event: KeyboardEvent) {
    this.store.dispatch(keydown(event));
  }

  nextFrame() {
    this.store.dispatch(nextFrame);
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
