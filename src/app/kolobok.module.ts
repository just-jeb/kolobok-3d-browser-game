import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {KolobokRootComponent} from './kolobok.component';
import {GameModule} from './game/game.module';
import {BabylonModule} from './babylon/babylon.module';

@NgModule({
  declarations: [
    KolobokRootComponent
  ],
  imports: [
    BrowserModule,
    GameModule,
    BabylonModule
  ],
  providers: [],
  bootstrap: [KolobokRootComponent]
})
export class AppModule { }
