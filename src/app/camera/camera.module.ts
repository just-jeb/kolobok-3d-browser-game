import {NgModule} from '@angular/core';
import {GameEntityModule} from '../game-entity/game-entity.module';
import {FINISH_CAMERA_INITIALIZATION} from './actions';

@NgModule({
  imports: [
    GameEntityModule.forFeature(FINISH_CAMERA_INITIALIZATION)
  ],
  declarations: []
})
export class CameraModule { }
