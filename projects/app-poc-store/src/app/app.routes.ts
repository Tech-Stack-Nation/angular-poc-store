import { Routes } from '@angular/router';
import { APPS } from '@config/app-list';
import { APP_MODULES } from '@config/apps';
import { APP_CONFIG_TEMPLATE_SETTINGS_TOKEN } from 'lib-default-template';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import("./config/pages").then((config) => config.PAGE_ROUTES),
    },
    ...Object.values(APP_MODULES).filter((app) => app.key !== APPS.STORE).map((app) => ({
        path: app.route,
        loadChildren: app.routes,
        providers: [{ provide: APP_CONFIG_TEMPLATE_SETTINGS_TOKEN, useValue: { useAppModulePathRoute: true }}]
    })),
];
