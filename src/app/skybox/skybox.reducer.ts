import {Action} from '@ngrx/store';
import {Skybox} from './skybox';
import {UPDATE_WORLD} from '../store/actions/update.actions';

const initialSkyboxState: Skybox = {
  size: 512,
  position: {x: 0, y: 0, z: 0},
  rotation: {x: 0, y: 0, z: 0}
};

export function skybox(state: Skybox = initialSkyboxState , action: Action) {
 switch (action.type) {
   case UPDATE_WORLD:
     return {...state, rotation: {...state.rotation, y: state.rotation.y + 0.001}};
   default:
     return state;
 }
}
