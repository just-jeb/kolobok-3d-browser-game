import {ActionReducerMap} from '@ngrx/store';
import {State} from '../state';
import {kolobok} from './kolobok.reducer';

export const reducers: ActionReducerMap<State> = {
  kolobok: kolobok
};
