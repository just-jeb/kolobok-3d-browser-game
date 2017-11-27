import {GameLoopEffects} from './game-loop.effects';
import {inject, TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {nextFrame} from '../actions/game-loop.actions';
import {finishRendering, render} from '../actions/render.actions';
import {cold, hot} from 'jasmine-marbles';
import {Observable} from 'rxjs/Observable';
import {updateWorld} from '../actions/update.actions';

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
      actions = hot('--n-f-----n-n', {n: nextFrame, f: finishRendering});
      const expected = cold('----(ur)-----', {u: updateWorld, r: render});
      expect(effects.updateAndRender$).toBeObservable(expected);
    })
  );

  it('Should fire render upon each nextFrame & finishRendering pair',
    inject([GameLoopEffects], (effects: GameLoopEffects) => {
      actions = hot('n-f----n--f----f-n---', {n: nextFrame, f: finishRendering});
      const expected = cold('--(ur)----(ur)---(ur)', {u: updateWorld, r: render});
      expect(effects.updateAndRender$).toBeObservable(expected);
    })
  );

  it('Should skip nextFrame or finishRendering in between nextFrame & finishRendering pair',
    inject([GameLoopEffects], (effects: GameLoopEffects) => {
      actions = hot('--n-ffff---nnnnn----fffff', {n: nextFrame, f: finishRendering});
      const expected = cold('----(ur)---(ur)-----(ur)-', {u: updateWorld, r: render});
      expect(effects.updateAndRender$).toBeObservable(expected);
    })
  );

});
