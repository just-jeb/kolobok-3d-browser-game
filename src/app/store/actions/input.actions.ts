import {Action} from '@ngrx/store';

export interface KeyboardEventAction extends Action {
  event: KeyboardEvent;
}

export const KEY_DOWN = 'KEY_DOWN';

export const keydown = (event: KeyboardEvent): KeyboardEventAction => {
  return {
    type: KEY_DOWN,
    event: event
  };
};
