import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameBootstrapperService} from '../bootstrap/game-bootstrapper.service';

export function engineFactory(bootstrapService: GameBootstrapperService) {
  return bootstrapService.engine;
}

export function sceneFactory(bootstrapService: GameBootstrapperService) {
  return bootstrapService.scene;
}

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: (bootstrapService: GameBootstrapperService) => bootstrapService.engineFactory,
    //   deps: [GameBootstrapperService]
    // },
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: (bootstrapService: GameBootstrapperService) => bootstrapService.engineFactory,
    //   deps: [GameBootstrapperService]
    // }
    {
      provide: 'DelayedEngine',
      useFactory: engineFactory,
      deps: [GameBootstrapperService]
    },
    {
      provide: 'DelayedScene',
      useFactory: sceneFactory,
      deps: [GameBootstrapperService]
    }
  ]
})
export class BabylonModule {
}
