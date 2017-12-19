import {Action} from '@ngrx/store';
import {Skybox} from './skybox';

const initialSkyboxState: Skybox = {
  size: 512,
  position: {x: 0, y: 0, z: 0},
  rotation: {x: 0, y: 0, z: 1}
};

export function skybox(state: Skybox = initialSkyboxState , action: Action) {
 switch (action.type) {
   default:
     return state;
 }
}
