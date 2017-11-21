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

export const FINISH_KOLOBOK_INITIALIZATION = 'FINISH_KOLOBOK_INITIALIZATION';
export const finishKolobokInitialization = createSimpleAction(FINISH_KOLOBOK_INITIALIZATION);

export const FINISH_GROUND_INITIALIZATION = 'FINISH_GROUND_INITIALIZATION';
export const finishGroundInitialization = createSimpleAction(FINISH_GROUND_INITIALIZATION);

export const FINISH_LIGHT_INITIALIZATION = 'FINISH_LIGHT_INITIALIZATION';
export const finishLightInitialization = createSimpleAction(FINISH_LIGHT_INITIALIZATION);

export const FINISH_CAMERA_INITIALIZATION = 'FINISH_CAMERA_INITIALIZATION';
export const finishCameraInitialization = createSimpleAction(FINISH_CAMERA_INITIALIZATION);
