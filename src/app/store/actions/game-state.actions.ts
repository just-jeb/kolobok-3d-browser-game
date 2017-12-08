import {createSimpleAction} from './action-creators';
import {Action} from '@ngrx/store';

export const START_GAME = 'START_GAME';
export const startGame = createSimpleAction(START_GAME);

export const STOP_GAME = 'STOP_GAME';
export const stopGame = createSimpleAction(STOP_GAME);

export const INIT_GAME = 'INIT_GAME';
export const initGame = createSimpleAction(INIT_GAME);

export const FINISH_GAME_INITIALIZATION = 'FINISH_GAME_INITIALIZATION';
export const finishGameInitialization = createSimpleAction(FINISH_GAME_INITIALIZATION);

export class BootstrapAction implements Action {
  public static readonly Type = 'BOOTSTRAP';

  constructor(public canvas: HTMLCanvasElement, public readonly type = BootstrapAction.Type) {
  }
}

export const FINISH_GAME_BOOTSTRAP = 'FINISH_GAME_BOOTSTRAP';
export const finishGameBootstrap = createSimpleAction(FINISH_GAME_BOOTSTRAP);
