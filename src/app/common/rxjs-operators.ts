import {Observable} from 'rxjs/Observable';
import {zip} from 'rxjs/observable/zip';
import {repeat, take} from 'rxjs/operators';

/**
 * Static lossy zip operator (zip without memory function)
 * @param {Observable<any>} observables observables to zip together
 */
export const lossyZip = (...observables: Observable<any>[]) => zip(...observables.map(source => source.pipe(take(1)))).pipe(repeat());
/**
 * Lettable lossy zip operator
 * @param {Observable<any>} observables observables to zip with
 */
export const lzip = (...observables: Observable<any>[]) => <T>(source: Observable<T>) => lossyZip(source, ...observables);
