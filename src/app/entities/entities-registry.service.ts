import {Injectable} from '@angular/core';
import {StatefulEntity} from './stateful-entity';

@Injectable()
export class EntitiesRegistryService {
  entities: StatefulEntity[];

  constructor() {

  }

  register(entity: StatefulEntity) {
    this.entities.push(entity);
  }

  // TODO: replace with observable subscription
  update(timeFactor: number) {
    for (const entity of this.entities) {
      entity.updateState(timeFactor);
    }
  }


}
