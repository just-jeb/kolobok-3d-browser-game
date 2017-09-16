import {createSimpleAction} from './action-creators';

export const RENDER = 'RENDER';
export const DONE_RENDERING = 'DONE_RENDERING';

export const render = createSimpleAction(RENDER);
export const doneRendering = createSimpleAction(DONE_RENDERING);

