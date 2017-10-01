import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {GameBootstrapperService} from '../../bootstrap/game-bootstrapper.service';
import {StoreService} from '../../store/store.service';

@Component({
  selector: 'kolobok-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements AfterViewInit {
  @ViewChild('canvas') canvas: ElementRef;

  constructor(private gameBootstrapper: GameBootstrapperService, public store: StoreService) {
  }

  ngAfterViewInit(): void {
    this.gameBootstrapper.bootstrap(this.canvas.nativeElement);
  }
}
