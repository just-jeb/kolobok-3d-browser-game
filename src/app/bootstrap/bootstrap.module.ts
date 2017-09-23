import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameBootstrapperService} from './game-bootstrapper.service';
import {StoreModule} from '../store/store.module';

@NgModule({
  imports: [
    CommonModule,
    StoreModule
  ],
  providers: [GameBootstrapperService]
})
export class BootstrapModule { }
