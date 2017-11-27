import {cold, hot} from 'jasmine-marbles';
import {lossyZip, lzip} from './rxjs-operators';
import {mapTo} from 'rxjs/operators';

describe('Static lossy zip operator', () => {

  it('Should zip observables together', () => {

    const a = hot('a---a--------a-');
    const b = hot('--b----b---b---');

    const observable = lossyZip(a, b).pipe(mapTo('1'));

    const expected = cold('--1----1-----1-');
    expect(observable).toBeObservable(expected);
  });

  it('Should not remember values', () => {
    const a = hot('a---a-a--------a-aaa');
    const b = hot('--b-----b-b--b------');

    const observable = lossyZip(a, b).pipe(mapTo('1'));

    const expected = cold('--1-----1------1----');
    expect(observable).toBeObservable(expected);
  });

});

describe('Lettable lossy zip operator', () => {

  it('Should zip observables together', () => {

    const a = hot('a---a--------a-');
    const b = hot('--b----b---b---');

    const observable = a.pipe(lzip(b), mapTo('1'));

    const expected = cold('--1----1-----1-');
    expect(observable).toBeObservable(expected);
  });

  it('Should not remember values', () => {
    const a = hot('a---a-a--------a-aaa');
    const b = hot('--b-----b-b--b------');

    const observable = a.pipe(lzip(b), mapTo('1'));

    const expected = cold('--1-----1------1----');
    expect(observable).toBeObservable(expected);
  });

});
