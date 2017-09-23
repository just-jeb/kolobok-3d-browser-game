import {GameLoopEffects} from './game-loop.effects';
import {Observable} from 'rxjs/Observable';
import {async, inject, TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import 'rxjs/add/operator/count';
import {NEXT_FRAME} from '../actions/game-loop.actions';

describe('Game loop effects', () => {
  let actions: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GameLoopEffects,
        provideMockActions(() => actions)
      ]
    });

  });

  it('Should never fire render until the previous render completes',
    async(inject([GameLoopEffects], (effects) => {
      actions = Observable.from([NEXT_FRAME, NEXT_FRAME]);

      effects.updateAndRender$.count().subscribe(result => {
        expect(result).toBe(1);
      });
    })));
});
