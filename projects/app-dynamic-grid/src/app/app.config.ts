import { ApplicationConfig, provideZoneChangeDetection, signal } from '@angular/core';
import { provideRouter, TitleStrategy } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { APP_CURRENT_PAGE_HEADER, APP_CURRENT_TITLE, APP_TITLE, TemplatePageTitleStrategy } from 'lib-title-strategy';
import { APP_CONFIG_TEMPLATE_SETTINGS_TOKEN } from 'lib-default-template';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideAnimationsAsync(),
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
    { provide: APP_TITLE, useValue: 'Dynamic Grid POC' },
    { provide: APP_CURRENT_TITLE, useValue: signal(undefined) },
    { provide: APP_CURRENT_PAGE_HEADER, useValue: signal(undefined) },
    { provide: APP_CONFIG_TEMPLATE_SETTINGS_TOKEN, useValue: { useAppModulePathRoute: false }},
  ]
};
