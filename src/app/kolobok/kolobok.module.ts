import {NgModule} from '@angular/core';
import {GameEntityModule} from '../game-entity/game-entity.module';
import {FINISH_KOLOBOK_INITIALIZATION} from './actions';

@NgModule({
  imports: [
    GameEntityModule.forFeature(FINISH_KOLOBOK_INITIALIZATION)
  ],
  declarations: []
})
export class KolobokModule { }
