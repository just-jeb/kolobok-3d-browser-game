import {ModuleWithProviders, NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {InitializationService} from './initialization.service';
import {INITIALIZATION_ACTIONS} from './tokens';

@NgModule({
  imports: [
    EffectsModule.forFeature([InitializationService])
  ],
  declarations: []
})
export class RootGameEntityModule {

}

@NgModule({
  imports: [],
  declarations: []
})
export class GameEntityModule {
  static forFeature(finishInitializationAction: string): ModuleWithProviders {
    return {
      ngModule: GameEntityModule,
      providers: [
        {
          provide: INITIALIZATION_ACTIONS,
          useValue: finishInitializationAction,
          multi: true
        }
      ]
    };
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootGameEntityModule,
      providers: []
    };
  }
}
