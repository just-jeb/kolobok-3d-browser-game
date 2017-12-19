import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Skybox} from './skybox';

export interface SkyboxState {
  skybox: Skybox;
}

export const SKYBOX_FEATURE = 'skybox';
export const skyboxFeatureSelector = createFeatureSelector(SKYBOX_FEATURE);
export const skyboxSelector = createSelector(skyboxFeatureSelector, (state: SkyboxState) => state.skybox);
