import {NgModule} from '@angular/core';
import {GameEntityModule} from '../game-entity/game-entity.module';
import {FINISH_KOLOBOK_INITIALIZATION} from './actions';
import {ActionReducerMap, StoreModule} from '@ngrx/store';
import {kolobok} from './kolobok.reducer';

const reducers: ActionReducerMap<any> = {
  kolobok: kolobok
};

@NgModule({
  imports: [
    StoreModule.forFeature('kolobok', reducers),
    GameEntityModule.forFeature(FINISH_KOLOBOK_INITIALIZATION)
  ],
  declarations: []
})
export class KolobokModule { }
