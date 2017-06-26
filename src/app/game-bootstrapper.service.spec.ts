import {inject, TestBed} from '@angular/core/testing';

import {GameBootstrapperService} from './game-bootstrapper.service';

describe('GameBootstrapperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameBootstrapperService]
    });
  });

  it('should be created', inject([GameBootstrapperService], (service: GameBootstrapperService) => {
    expect(service).toBeTruthy();
  }));
});
