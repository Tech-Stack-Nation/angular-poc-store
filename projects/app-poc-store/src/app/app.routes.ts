import { Routes } from '@angular/router';
import { APPS } from '@config/app-list';
import { APP_MODULES } from '@config/apps';
import { APP_CONFIG_TEMPLATE_SETTINGS_TOKEN } from 'lib-default-template';

export const routes: Routes = [
    {
        path: '',
        title: 'Welcome',
        loadComponent: APP_MODULES[APPS.STORE].layoutComponent,
        loadChildren: () => import("./config/pages").then((config) => config.PAGE_ROUTES),
    },
    ...Object.values(APP_MODULES).filter((app) => app.key !== APPS.STORE).map((app) => ({
        path: app.route,
        loadComponent: app.layoutComponent,
        loadChildren: app.routes,
        providers: [...app.providers, { provide: APP_CONFIG_TEMPLATE_SETTINGS_TOKEN, useValue: { useAppModulePathRoute: true }}]
    }))
];
