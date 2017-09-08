import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainScreenComponent} from './main-screen/main-screen.component';
import {StoreModule} from '../store/store.module';
import {BootstrapModule} from '../bootstrap/bootstrap.module';

@NgModule({
  imports: [
    CommonModule,
    StoreModule,
    BootstrapModule
  ],
  declarations: [MainScreenComponent],
  exports: [MainScreenComponent],
})
export class GameModule { }
