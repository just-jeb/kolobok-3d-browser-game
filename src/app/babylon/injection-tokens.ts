import {InjectionToken} from '@angular/core';
import {Engine, Scene} from 'babylonjs';
import {Observable} from 'rxjs/Observable';

export const DelayedEngineToken = new InjectionToken<Observable<Engine>>('DelayedEngine');
export const DelayedSceneToken = new InjectionToken<Observable<Scene>>('DelayedScene');
