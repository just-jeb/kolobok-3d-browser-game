import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Kolobok} from './kolobok';

export interface KolobokState {
  kolobok: Kolobok;
}

export const KOLOBOK_FEATURE = 'kolobok';
export const kolobokFeatureSelector = createFeatureSelector(KOLOBOK_FEATURE);
export const kolobokSelector = createSelector(kolobokFeatureSelector, (state: KolobokState) => state.kolobok);
