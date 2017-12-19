import {RenderData} from '../rendering/render-data';
import {Color} from '../common/color';

export const kolobokRenderData: RenderData = {
  diffuseTexture: 'assets/textures/kolobok.jpg',
  bumpTexture: 'assets/textures/kolobokBump.jpg',
  ambientColor: new Color(0, 0, 0),
  diffuseColor: new Color(1, 1, 0),
  emissiveColor: new Color(0.7, 0.6, 0.1),
  specular: {
    color: new Color(0.9, 0.7, 0.1),
    power: 10
  }
};
