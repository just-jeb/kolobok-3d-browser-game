import {inject, TestBed} from '@angular/core/testing';

import {InitializationService} from './initialization.service';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {GameEntityModule} from './game-entity.module';

describe('InitializationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot([InitializationService]),
        GameEntityModule.forFeature('SOMETHING')
      ],
      providers: [InitializationService]
    });
  });

  it('should be created', inject([InitializationService], (service: InitializationService) => {
    expect(service).toBeTruthy();
  }));
});

