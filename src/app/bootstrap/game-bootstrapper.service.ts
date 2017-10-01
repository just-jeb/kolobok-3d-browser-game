import {Injectable} from '@angular/core';
import {Color4, Engine, FreeCamera, HemisphericLight, Mesh, Scene, Vector3} from 'babylonjs';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {AsyncSubject} from 'rxjs/AsyncSubject';
import 'rxjs/add/operator/map';
import {StoreService} from '../store/store.service';

@Injectable()
export class GameBootstrapperService {
  public scene: Observable<Scene>;
  private engineSubject: Subject<Engine> = new AsyncSubject<Engine>();
  // TODO: remove
  private canvas: HTMLCanvasElement;

  get engine(): Observable<Engine> {
    return this.engineSubject;
  }

  constructor(private store: StoreService) {
    this.scene = this.engineSubject.map(engine => {
      const scene = new Scene(engine);
      this.initScene(scene);
      engine.runRenderLoop(() => this.store.nextFrame());
      return scene;
    });
  }

  bootstrap(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.engineSubject.next(new Engine(canvas, true));
    this.engineSubject.complete();
  }

  // TODO: remove
  private initScene(scene: Scene): Scene {
    // Change the scene background color to green.
    scene.clearColor = new Color4(0, 1, 0, 0);

    // This creates and positions a free camera
    const camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene);

    // This targets the camera to scene origin
    camera.setTarget(Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(this.canvas, false);

    // This creates a light, aiming 0,1,0 - to the sky.
    const light = new HemisphericLight('light1', new Vector3(0, 1, 0), scene);

    // Dim the light a small amount
    light.intensity = .5;

    // Let's try our built-in 'sphere' shape. Params: name, subdivisions, size, scene
    const sphere = Mesh.CreateSphere('sphere1', 16, 2, scene);

    // Move the sphere upward 1/2 its height
    sphere.position.y = 1;

    // Let's try our built-in 'ground' shape.  Params: name, width, depth, subdivisions, scene
    Mesh.CreateGround('ground1', 6, 6, 2, scene);
    return scene;
  }


}
