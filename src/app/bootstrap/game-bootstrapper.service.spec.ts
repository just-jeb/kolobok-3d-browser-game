import {inject, TestBed} from '@angular/core/testing';

import {GameBootstrapperService} from './game-bootstrapper.service';
import {BootstrapModule} from './bootstrap.module';

describe('GameBootstrapperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BootstrapModule]
    });
  });

  it('should be created', inject([GameBootstrapperService], (service: GameBootstrapperService) => {
    expect(service).toBeTruthy();
  }));
});
