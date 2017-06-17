import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/kolobok.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//noinspection JSIgnoredPromiseFromCall
platformBrowserDynamic().bootstrapModule(AppModule);

