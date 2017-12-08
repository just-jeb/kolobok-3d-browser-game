import {NgModule} from '@angular/core';
import {GameEntityModule} from '../game-entity/game-entity.module';
import {FINISH_GROUND_INITIALIZATION} from './actions';

@NgModule({
  imports: [
    GameEntityModule.forFeature(FINISH_GROUND_INITIALIZATION)
  ],
  declarations: []
})
export class GroundModule { }
