import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './kolobok.component';
import {GameModule} from './game/game.module';
import {BabylonModule} from './babylon/babylon.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GameModule,
    BabylonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
