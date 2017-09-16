import {Action} from '@ngrx/store';

export const createSimpleAction = (type: string): Action => ({type: type});
