import {inject, TestBed} from '@angular/core/testing';

import {BabylonBootstrapService} from './babylon-bootstrap.service';

describe('BabylonBootstrapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BabylonBootstrapService]
    });
  });

  it('should be created', inject([BabylonBootstrapService], (service: BabylonBootstrapService) => {
    expect(service).toBeTruthy();
  }));
});
