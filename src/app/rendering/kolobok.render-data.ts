import {RenderData} from './render-data';

export const kolobokRenderData: RenderData = {
  diffuseTexture: 'assets/textures/kolobok.jpg',
  bumpTexture: 'assets/textures/kolobokBump.jpg',
  ambientColor: {r: 0, g: 0, b: 0},
  diffuseColor: {r: 1, g: 1, b: 0},
  emissiveColor: {r: .7, g: .6, b: .1},
  specular: {
    color: {r: .9, g: .7, b: .1},
    power: 10
  }
};
