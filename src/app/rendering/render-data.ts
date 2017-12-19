import {Color} from '../common/color';

export interface RenderData {
  diffuseTexture?: string;
  reflectionTexture?: string;
  bumpTexture?: string;
  ambientColor?: Color;
  diffuseColor?: Color;
  emissiveColor?: Color;
  specular?: {
    color?: Color;
    power?: number;
  };
}
