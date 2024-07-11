import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, TitleStrategy } from '@angular/router';
import { routes } from './app.routes';
import { TITLE_STRATEGY_APP_PROVIDERS } from './config/providers';
import { APP_CONFIG_TEMPLATE_SETTINGS_TOKEN } from 'lib-default-template';
import { TemplatePageTitleStrategy } from 'lib-title-strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  
  ]
};
