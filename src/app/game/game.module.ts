import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainScreenComponent } from './main-screen/main-screen.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainScreenComponent],
  exports: [MainScreenComponent]
})
export class GameModule { }
