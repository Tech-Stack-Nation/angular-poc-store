import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, TitleStrategy, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { STORE_POC_APP_PROVIDERS } from './config/providers';
import { TemplatePageTitleStrategy } from 'lib-title-strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes, withViewTransitions()),
     provideAnimationsAsync(),
     ...STORE_POC_APP_PROVIDERS,
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },

  ]
};
