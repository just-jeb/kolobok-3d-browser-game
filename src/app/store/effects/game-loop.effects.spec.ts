import {GameLoopEffects} from './game-loop.effects';
import {inject, TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/filter';
import {nextFrame} from '../actions/game-loop.actions';
import {doneRendering} from '../actions/render.actions';
import {Subject} from 'rxjs/Subject';

describe('Game loop effects', () => {
  let actions: Subject<any>;

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
      actions = new Subject();

      effects.updateAndRender$
        .scan((acc: number, _: any) => acc + 1, 0)
        .filter((x: number) => x >= 2)
        .subscribe(result => {
          expect(result).toBe(2);
        });

      actions.next(nextFrame);
      actions.next(doneRendering);
      actions.next(nextFrame);
      actions.next(nextFrame);
      actions.next(nextFrame);
      actions.next(nextFrame);
    }));

  it('Should fire render upon each nextFrame & doneRendering pair',
    inject([GameLoopEffects], (effects: GameLoopEffects) => {
      actions = new Subject();

      effects.updateAndRender$
        .scan((acc: number, _: any) => acc + 1, 0)
        .filter((x: number) => x >= 6)
        .subscribe(result => {
          expect(result).toBe(6);
        });

      actions.next(nextFrame);
      actions.next(doneRendering);
      actions.next(nextFrame);
      actions.next(doneRendering);
      actions.next(doneRendering);
      actions.next(nextFrame);
    }));

  it('Should skip nextFrame or doneRendering in between nextFrame & doneRendering pair',
    inject([GameLoopEffects], (effects: GameLoopEffects) => {
      actions = new Subject();

      effects.updateAndRender$
        .scan((acc: number, _: any) => acc + 1, 0)
        .filter((x: number) => x >= 6)
        .subscribe(result => {
          expect(result).toBe(6);
        });

      actions.next(nextFrame);
      actions.next(doneRendering);
      actions.next(doneRendering);
      actions.next(doneRendering);
      actions.next(doneRendering);
      actions.next(nextFrame);
      actions.next(nextFrame);
      actions.next(nextFrame);
      actions.next(nextFrame);
      actions.next(nextFrame);
      actions.next(doneRendering);
      actions.next(doneRendering);
      actions.next(doneRendering);
      actions.next(doneRendering);
      actions.next(doneRendering);
    }));
});
