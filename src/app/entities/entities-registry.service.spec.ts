import { TestBed, inject } from '@angular/core/testing';

import { EntitiesRegistryService } from './entities-registry.service';

describe('EntitiesRegistryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntitiesRegistryService]
    });
  });

  it('should be created', inject([EntitiesRegistryService], (service: EntitiesRegistryService) => {
    expect(service).toBeTruthy();
  }));
});
