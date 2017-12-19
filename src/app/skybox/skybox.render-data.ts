import {RenderData} from '../rendering/render-data';
import {Color} from '../common/color';

export const skyboxRenderData: RenderData = {
  reflectionTexture: 'assets/textures/skybox',
  diffuseColor: new Color(0, 0, 0),
  specular: {
    color: new Color(0, 0, 0),
  }
};
