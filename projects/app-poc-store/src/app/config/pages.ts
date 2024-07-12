import { Routes } from "@angular/router";

import { APP_CONFIG_TEMPLATE_SETTINGS_TOKEN, PAGE } from "lib-default-template";
import { APP_STORE_APP_CONFIG } from "./app";
import { APP_MODULES } from "@config/apps";
import { APPS } from "@config/app-list";
import { STORE_POC_APP_PROVIDERS } from "./providers";

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

export const PAGE_ROUTES: Routes = [
    {
        path: '',
        loadComponent: APP_STORE_APP_CONFIG.layoutComponent,
        children: [
            ...Object.values(STORE_POC_APP_PAGES).map(page => page.route),
            { path: '', redirectTo: STORE_POC_APP_PAGES.STORE.partialLink, pathMatch: 'full' }
        ],
        providers: [...STORE_POC_APP_PROVIDERS, 
            { provide: APP_CONFIG_TEMPLATE_SETTINGS_TOKEN, useValue: { useAppModulePathRoute: false }},
        ]
    },
   
  
];

