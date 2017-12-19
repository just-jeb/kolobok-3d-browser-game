import {NgModule} from '@angular/core';
import {ActionReducerMap, StoreModule} from '@ngrx/store';
import {GameEntityModule} from '../game-entity/game-entity.module';
import {skybox} from './skybox.reducer';
import {SKYBOX_FEATURE} from './skybox.selector';
import {FINISH_SKYBOX_INITIALIZATION} from './actions';

const reducers: ActionReducerMap<any> = {
  skybox: skybox
};

@NgModule({
  imports: [
    StoreModule.forFeature(SKYBOX_FEATURE, reducers),
    GameEntityModule.forFeature(FINISH_SKYBOX_INITIALIZATION)
  ],
  declarations: []
})
export class SkyboxModule { }
