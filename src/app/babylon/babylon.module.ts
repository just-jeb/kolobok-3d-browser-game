import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RenderEffects} from './render.effects';
import {EffectsModule} from '@ngrx/effects';
import {BabylonBootstrapService} from './babylon-bootstrap.service';
import {DelayedEngineToken, DelayedSceneToken} from './injection-tokens';
import {BootstrapEffects} from './bootstrap.effects';
import {BabylonGameStateEffects} from './babylon-game-state.effects';
import {KolobokEffects} from './kolobok.effects';
import {GroundEffects} from './ground.effects';
import {CameraEffects} from './camera.effects';
import {LightEffects} from './light.effects';
import {SkyboxEffects} from './skybox.effects';

export function engineFactory(bootstrapService: BabylonBootstrapService) {
  return bootstrapService.engine;
}

export function sceneFactory(bootstrapService: BabylonBootstrapService) {
  return bootstrapService.scene;
}

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([
      RenderEffects, BootstrapEffects, BabylonGameStateEffects,
      GroundEffects, KolobokEffects, CameraEffects, LightEffects, SkyboxEffects
    ])
  ],
  providers: [
    BabylonBootstrapService,
    {
      provide: DelayedEngineToken,
      useFactory: engineFactory,
      deps: [BabylonBootstrapService]
    },
    {
      provide: DelayedSceneToken,
      useFactory: sceneFactory,
      deps: [BabylonBootstrapService]
    }
  ]
})
export class BabylonModule {
}
