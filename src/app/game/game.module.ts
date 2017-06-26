import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainScreenComponent} from './main-screen/main-screen.component';
import {GameBootstrapperService} from '../game-bootstrapper.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainScreenComponent],
  exports: [MainScreenComponent],
  providers: [GameBootstrapperService]
})
export class GameModule { }
