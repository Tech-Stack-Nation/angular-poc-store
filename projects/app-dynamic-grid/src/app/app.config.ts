import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, TitleStrategy } from '@angular/router';

import { routes } from './app.routes';
import { DYNAMIC_GRID_APP_PROVIDERS } from './config/providers';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { APP_CONFIG_TEMPLATE_SETTINGS_TOKEN } from 'lib-default-template';
import { TemplatePageTitleStrategy } from 'lib-title-strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    ...DYNAMIC_GRID_APP_PROVIDERS,
    provideAnimationsAsync(),
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
    { provide: APP_CONFIG_TEMPLATE_SETTINGS_TOKEN, useValue: { useAppModulePathRoute: false }}
  ]
};
