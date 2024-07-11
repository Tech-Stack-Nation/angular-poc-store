import { Routes } from '@angular/router';
import { DYNAMIG_GRID_APP_CONFIG } from './config/app';


export const routes: Routes = [
    {
        path: '',
        title: 'Welcome',
        loadComponent: DYNAMIG_GRID_APP_CONFIG.layoutComponent,
        loadChildren: () => import("./config/pages").then((config) => config.DYNAMIC_GRID_APP_PAGE_ROUTES),
    }
];


