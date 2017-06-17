import {AfterViewInit, Component, ViewChild} from "@angular/core";
import {Color4, Engine, FreeCamera, HemisphericLight, Mesh, Scene, Vector3} from "babylonjs";

@Component({
  selector: 'kolobok-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements AfterViewInit{


  @ViewChild('canvas') canvas;
  private engine: Engine;

  constructor() { }

  ngAfterViewInit(): void {
    this.engine = new Engine(this.canvas.nativeElement, true);

    // Now create a basic Babylon Scene object
    let scene = new Scene(this.engine);

    // Change the scene background color to green.
    scene.clearColor = new Color4(0, 1, 0, 0);

    // This creates and positions a free camera
    var camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);

    // This targets the camera to scene origin
    camera.setTarget(Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(this.canvas.nativeElement, false);

    // This creates a light, aiming 0,1,0 - to the sky.
    var light = new HemisphericLight("light1", new Vector3(0, 1, 0), scene);

    // Dim the light a small amount
    light.intensity = .5;

    // Let's try our built-in 'sphere' shape. Params: name, subdivisions, size, scene
    var sphere = Mesh.CreateSphere("sphere1", 16, 2, scene);

    // Move the sphere upward 1/2 its height
    sphere.position.y = 1;

    // Let's try our built-in 'ground' shape.  Params: name, width, depth, subdivisions, scene
    var ground = Mesh.CreateGround("ground1", 6, 6, 2, scene);

    this.engine.runRenderLoop(function () {
      scene.render();
    });

  }

}
