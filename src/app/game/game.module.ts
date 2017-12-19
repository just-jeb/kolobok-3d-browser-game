import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainScreenComponent} from './main-screen/main-screen.component';
import {StoreModule} from '../store/store.module';
import {KolobokModule} from '../kolobok/kolobok.module';
import {GroundModule} from '../ground/ground.module';
import {GameEntityModule} from '../game-entity/game-entity.module';
import {CameraModule} from '../camera/camera.module';
import {LightModule} from '../light/light.module';
import {SkyboxModule} from '../skybox/skybox.module';

@NgModule({
  imports: [
    CommonModule,
    StoreModule, GameEntityModule.forRoot(), KolobokModule, GroundModule, CameraModule, LightModule, SkyboxModule
  ],
  declarations: [MainScreenComponent],
  exports: [MainScreenComponent],
})
export class GameModule {
}
