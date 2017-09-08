import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameBootstrapperService} from './game-bootstrapper.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [GameBootstrapperService]
})
export class BootstrapModule { }
