import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import("./config/pages").then((config) => config.DYNAMIC_GRID_APP_PAGE_ROUTES),
    }
];


