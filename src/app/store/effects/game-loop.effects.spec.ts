import {GameLoopEffects} from './game-loop.effects';
import {inject, TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {nextFrame} from '../actions/game-loop.actions';
import {finishRendering, render} from '../actions/render.actions';
import {cold, hot} from 'jasmine-marbles';
import {Observable} from 'rxjs/Observable';
import {updateWorld} from '../actions/update.actions';
import {zip} from 'rxjs/observable/zip';
import {mergeMapTo, repeat, take} from 'rxjs/operators';
import {from} from 'rxjs/observable/from';

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

  // TODO: make lossy zip to be actually separate operator and move the tests next to it

  it('Test lossy zip', () => {

    const a = hot('a---a--------a-');
    const b = hot('--b----b---b---');

    const observable = zip(
      a.pipe(take(1)),
      b.pipe(take(1))
    ).pipe(
      mergeMapTo(from(['1'])),
      repeat()
    );
    const expected = cold('--1----1-----1-');
    expect(observable).toBeObservable(expected);
  });

  it('Test lossy zip with grouped value', () => {

    const a = hot('a------a---------a---');
    const b = hot('--b-------b----b-----');

    const observable = zip(
      a.pipe(take(1)),
      b.pipe(take(1))
    ).pipe(
      mergeMapTo(from(['1', '2'])),
      repeat()
    );
    const expected = cold('--(12)----(12)---(12)');
    expect(observable).toBeObservable(expected);
  });

});
