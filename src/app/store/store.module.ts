import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule as NgRxStoreModule} from '@ngrx/store';
import {reducers} from 'app/store/reducers';
import {StoreService} from './store.service';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {InputEffects} from './effects/input.effects';
import {GameLoopEffects} from './effects/game-loop.effects';

@NgModule({
  imports: [
    CommonModule,
    NgRxStoreModule.forRoot(reducers),
    EffectsModule.forRoot([InputEffects, GameLoopEffects]),
    !environment.production ? StoreDevtoolsModule.instrument({maxAge: 10}) : []
  ],
  providers: [StoreService]
})
export class StoreModule {
}
