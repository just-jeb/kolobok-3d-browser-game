import {NgModule} from '@angular/core';
import {GameEntityModule} from '../game-entity/game-entity.module';
import {FINISH_LIGHT_INITIALIZATION} from './actions';

@NgModule({
  imports: [
    GameEntityModule.forFeature(FINISH_LIGHT_INITIALIZATION)
  ],
  declarations: []
})
export class LightModule { }
