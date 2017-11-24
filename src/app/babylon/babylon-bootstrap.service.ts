import {Injectable} from '@angular/core';
import {Engine, Scene} from 'babylonjs';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {AsyncSubject} from 'rxjs/AsyncSubject';

@Injectable()
export class BabylonBootstrapService {

  private engineSubject: Subject<Engine> = new AsyncSubject<Engine>();
  private sceneSubject: Subject<Scene> = new AsyncSubject<Scene>();
  public canvas: HTMLCanvasElement;

  constructor() {
    this.engineSubject.subscribe(engine => {
      this.sceneSubject.next(new Scene(engine));
      this.sceneSubject.complete();
    });
  }

  get engine(): Observable<Engine> {
    return this.engineSubject;
  }

  get scene(): Observable<Scene> {
    return this.sceneSubject;
  }

  bootstrap(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.engineSubject.next(new Engine(canvas, true));
    this.engineSubject.complete();
  }

}
