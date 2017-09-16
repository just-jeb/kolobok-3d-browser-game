import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameBootstrapperService} from '../bootstrap/game-bootstrapper.service';
import {RenderEffects} from './render.effects';

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
    {
      provide: 'DelayedEngine',
      useFactory: engineFactory,
      deps: [GameBootstrapperService]
    },
    {
      provide: 'DelayedScene',
      useFactory: sceneFactory,
      deps: [GameBootstrapperService]
    },
    RenderEffects
  ]
})
export class BabylonModule {
}
