import { Routes } from "@angular/router";
import { PAGE } from "lib-default-template";
import { APPS } from "@config/app-list";
import { DOCUMENT_APP_PROVIDERS } from "./providers";
import { DOCUMENTATION_APP_CONFIG } from "./app";
import { lazyLoadScriptsResolver } from "../resolver/lazyload.resolver";
import { titleResolver } from "../resolver/title.resolver";

export const DOCUMENT_APP_PAGES = {
    ARTICLE: new PAGE(
        {
            path: "article/:articleKey",
            loadComponent: () => import('../components/article-page/article-page.component'),
            title: titleResolver,
            resolve: {
                scripts: lazyLoadScriptsResolver
            },
            providers: []
        },
        '',
        APPS.DOCUMENTATION,
    ),
}

export const DOCUMENT_APP_PAGE_ROUTES: Routes = [
    {
        path: '',
        loadComponent: DOCUMENTATION_APP_CONFIG.layoutComponent,
        children: [
            ...Object.values(DOCUMENT_APP_PAGES).map(page => page.route),
            { path: '', redirectTo: 'article/default', pathMatch: 'full' }
        ],
        providers: [...DOCUMENT_APP_PROVIDERS]
    },
];

