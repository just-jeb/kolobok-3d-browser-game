import {Injectable} from '@angular/core';
import {Color4, Engine, FreeCamera, HemisphericLight, Mesh, Scene, Vector3} from 'babylonjs';

@Injectable()
export class GameBootstrapperService {

  constructor() { }

  bootstrap(canvas: HTMLCanvasElement) {
    const engine = new Engine(canvas, true);

    // Now create a basic Babylon Scene object
    const scene = new Scene(engine);

    // Change the scene background color to green.
    scene.clearColor = new Color4(0, 1, 0, 0);

    // This creates and positions a free camera
    const camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene);

    // This targets the camera to scene origin
    camera.setTarget(Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(canvas, false);

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

    engine.runRenderLoop(function () {
      scene.render();
    });
  }

}
