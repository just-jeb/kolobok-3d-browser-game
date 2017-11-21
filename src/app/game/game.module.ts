import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainScreenComponent} from './main-screen/main-screen.component';
import {StoreModule} from '../store/store.module';

@NgModule({
  imports: [
    CommonModule,
    StoreModule
  ],
  declarations: [MainScreenComponent],
  exports: [MainScreenComponent],
})
export class GameModule { }
