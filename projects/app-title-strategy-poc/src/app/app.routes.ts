import { Routes } from '@angular/router';
import { TITLE_STRATEGY_APP_CONFIG } from './config/app';

export const routes: Routes = [
    {
        path: '',
        title: 'Welcome',
        loadComponent: TITLE_STRATEGY_APP_CONFIG.layoutComponent,
        loadChildren: TITLE_STRATEGY_APP_CONFIG.routes,
    }
];

