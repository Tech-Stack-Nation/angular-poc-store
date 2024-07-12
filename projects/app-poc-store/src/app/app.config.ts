import { ApplicationConfig, provideZoneChangeDetection, signal } from '@angular/core';
import { provideRouter, TitleStrategy, withComponentInputBinding, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { APP_CURRENT_PAGE_HEADER, APP_CURRENT_TITLE, APP_TITLE, TemplatePageTitleStrategy } from 'lib-title-strategy';
import { provideMarkdown } from 'ngx-markdown';
import { HttpClient, provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withViewTransitions(), withComponentInputBinding()),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideMarkdown({ loader: HttpClient }),
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
    { provide: APP_TITLE, useValue: 'POC Store' },
    { provide: APP_CURRENT_TITLE, useValue: signal(undefined) },
    { provide: APP_CURRENT_PAGE_HEADER, useValue: signal(undefined) },
  ]
};
