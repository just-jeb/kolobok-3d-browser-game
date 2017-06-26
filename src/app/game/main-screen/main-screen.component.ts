import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {GameBootstrapperService} from '../../game-bootstrapper.service';

@Component({
  selector: 'kolobok-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements AfterViewInit {
  @ViewChild('canvas') canvas;

  constructor(private gameBootstrapper: GameBootstrapperService) { }

  ngAfterViewInit(): void {
    this.gameBootstrapper.bootstrap(this.canvas.nativeElement);
  }

}
