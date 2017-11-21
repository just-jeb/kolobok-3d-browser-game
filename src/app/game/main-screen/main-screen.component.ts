import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {StoreService} from '../../store/store.service';
import {BootstrapAction} from '../../store/actions/game-state.actions';

@Component({
  selector: 'kolobok-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements AfterViewInit {
  @ViewChild('canvas') canvas: ElementRef;

  constructor(public store: StoreService) {
  }

  ngAfterViewInit(): void {
    this.store.dispatch(new BootstrapAction(this.canvas.nativeElement));
  }
}
