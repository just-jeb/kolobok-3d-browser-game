import {GameLoopEffects} from './game-loop.effects';
import {Observable} from 'rxjs/Observable';
import {inject, TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import 'rxjs/add/operator/count';
import {nextFrame} from '../actions/game-loop.actions';

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
    inject([GameLoopEffects], (effects: GameLoopEffects) => {
      actions = Observable.from([nextFrame, nextFrame]);

      effects.updateAndRender$.count().subscribe(result => {
        expect(result).toBe(2);
      });

    }));
});
