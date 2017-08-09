import {StatefulEntity} from './stateful-entity';
import {Vector3} from 'babylonjs';
/**
 * Created by Evgeny Barabanov on 8/9/2017.
 */
export class Kolobok implements StatefulEntity {
  position: Vector3;
  velocity: Vector3;

  updateState(timeFactor: number) {
    this.position.x += this.velocity.x;
  }
}
