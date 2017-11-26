import {GameLoopEffects} from './game-loop.effects';
import {inject, TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {nextFrame} from '../actions/game-loop.actions';
import {finishRendering, render} from '../actions/render.actions';
import {cold, hot} from 'jasmine-marbles';
import {Observable} from 'rxjs/Observable';
import {updateWorld} from '../actions/update.actions';
import {zip} from 'rxjs/observable/zip';
import {take, mergeMapTo, repeat} from 'rxjs/operators';
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

  // it('Should never fire render until the previous render completes',
  //   inject([GameLoopEffects], (effects: GameLoopEffects) => {
  //     actions = hot('--a-b-a-a-a-a', {a: nextFrame, b: finishRendering});
  //     const expected = cold('----(ab)--------', {a: updateWorld, b: render});
  //     expect(effects.updateAndRender$).toBeObservable(expected);
  //   })
  // );

  it('Test lossy zip', () => {

    const a = hot('a---a--------a-');
    const b = hot('--b----b---b---');

    const observable = zip(
      a.pipe(take(1)),
      b.pipe(take(1))
    ).pipe(
      mergeMapTo(from(['1', '2'])),
      repeat()
    );
    const expected = cold('--1----1-----1-');
    expect(observable).toBeObservable(expected);
  });

  it('Test lossy zip with grouped value', () => {

    const a = hot('a---a--------a-');
    const b = hot('--b----b---b---');

    const observable = zip(
      a.pipe(take(1)),
      b.pipe(take(1))
    ).pipe(
      mergeMapTo(from(['1', '2'])),
      repeat()
    );
    const expected = cold('--12---12----12-');
    expect(observable).toBeObservable(expected);
  });

  // it('Should fire render upon each nextFrame & finishRendering pair',
  //   inject([GameLoopEffects], (effects: GameLoopEffects) => {
  //
  //
  //    // actions = hot('a-b-a--b---b-a-', {a: nextFrame, b: finishRendering});
  //     // This is really expected:
  //     const expected = cold('--(ur)---ur----ur', {u: updateWorld, r: render});
  //     // This is what passes:
  //   // const expected = cold('--r-r--r-------', {u: updateWorld, r: render});
  //     expect(effects.updateAndRender$).toBeObservable(expected);
  //
  //   }));
  //
  // it('Should skip nextFrame or finishRendering in between nextFrame & finishRendering pair',
  //   inject([GameLoopEffects], (effects: GameLoopEffects) => {
  //     actions = hot('--a-bbbb-aaaaa-bbbbb', {a: nextFrame, b: finishRendering});
  //     const expected = cold('----(ab)----(ab)-----(ab)----', {a: updateWorld, b: render});
  //     expect(effects.updateAndRender$).toBeObservable(expected);
  //     actions = new Subject();
  //
  //     effects.updateAndRender$.pipe(
  //       scan((acc: number, _: any) => acc + 1, 0),
  //       filter((x: number) => x >= 6)
  //     ).subscribe(result => expect(result).toBe(6));
  //
  //     actions.next(nextFrame);
  //     actions.next(finishRendering);
  //     actions.next(finishRendering);
  //     actions.next(finishRendering);
  //     actions.next(finishRendering);
  //     actions.next(nextFrame);
  //     actions.next(nextFrame);
  //     actions.next(nextFrame);
  //     actions.next(nextFrame);
  //     actions.next(nextFrame);
  //     actions.next(finishRendering);
  //     actions.next(finishRendering);
  //     actions.next(finishRendering);
  //     actions.next(finishRendering);
  //     actions.next(finishRendering);
  //   }));
});
