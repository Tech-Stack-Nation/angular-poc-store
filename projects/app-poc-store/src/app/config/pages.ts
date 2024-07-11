import { Routes } from "@angular/router";
import { APPS } from "@config/app-list";
import { PAGE } from "lib-default-template";

export const STORE_POC_APP_PAGES = {
    STORE: new PAGE(
        {
            path: "store",
            loadComponent: () => import('../components/store-page/store-page.component'),
            title: "Store",
            providers: []
        },
        'Store',
        '',
    ),
}

export const PAGE_ROUTES: Routes = [...Object.values(STORE_POC_APP_PAGES).map(page => page.route),
{ path: '', redirectTo: STORE_POC_APP_PAGES.STORE.partialLink, pathMatch: 'full' }
];