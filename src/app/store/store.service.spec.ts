import {inject, TestBed} from '@angular/core/testing';

import {StoreService} from './store.service';
import {StoreModule} from './store.module';

describe('StoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule]
    });
  });

  it('should be created', inject([StoreService], (service: StoreService) => {
    expect(service).toBeTruthy();
  }));
});
