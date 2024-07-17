import { APPS } from './app-list';
import { DYNAMIG_GRID_APP_CONFIG } from '@projects/app-dynamic-grid/src/app/config/app';
import { TITLE_STRATEGY_APP_CONFIG } from '@projects/app-title-strategy-poc/src/app/config/app';
import { APP_STORE_APP_CONFIG } from '@projects/app-poc-store/src/app/config/app';
import { DOCUMENTATION_APP_CONFIG } from '@projects/app-documentation/src/app/config/app';
import { LoadChildrenCallback } from '@angular/router';
import { LIBS } from './lib-list';
import { DOCS_PAGE_CONFIG } from 'lib-default-template';
import { AUTHOR_CONFIG } from './author-list';
import { AppPreloadScript } from 'lib-lazyload-util';

export interface APP_CONFIG {
    key: APPS,
    image: string;
    title: string;
    author: AUTHOR_CONFIG;
    description: string;
    layoutComponent: any;
    route: APPS | string;
    routes: LoadChildrenCallback | undefined;
    scriptsToPreload: AppPreloadScript[]
}

export type WORKSPACE = APPS | LIBS;

export const DOCS_MODULES: Record<WORKSPACE, DOCS_PAGE_CONFIG> = {
    [APPS.DOCUMENTATION]: {
        key: 'default',
        type: 'APP',
        folder: 'app-documentation',
        link: 'Docs',
        showInMenu: true,
    },
    [APPS.STORE]: {
        key: 'app-store',
        type: 'APP',
        folder: 'app-poc-store',
        link: 'Home',
        showInMenu: true,
    },
    [APPS.TITLE_STRATEGY]: {
        key: 'app-title-strategy',
        type: 'APP',
        folder: 'app-title-strategy-poc',
        link: 'Title Strategy',
        showInMenu: true,
    },
    [APPS.DYNAMIC_GRID]: {
        key: 'app-dynamic-grid',
        type: 'APP',
        folder: 'app-dynamic-grid',
        link: 'Dynamic Grid',
        showInMenu: true,
    },
    [LIBS.DEFAULT_TEMPLATE]: {
        key: 'lib-default-template',
        type: 'LIB',
        folder: 'lib-default-template',
        link: 'Default template',
        showInMenu: true,
    },
    [LIBS.DYNAMIG_GRID]: {
        key: 'lib-dynamic-grid',
        type: 'LIB',
        folder: 'lib-dynamic-grid',
        link: 'Dynamic Grid',
        showInMenu: true,
    },
    [LIBS.TITLE_STRATEGY]: {
        key: 'lib-title-strategy',
        type: 'LIB',
        folder: 'lib-title-strategy',
        link: 'Title Strategy',
        showInMenu: true,
    },
}

export const APP_MODULES: Record<APPS, APP_CONFIG> = {
    [APPS.DOCUMENTATION]: DOCUMENTATION_APP_CONFIG,
    [APPS.STORE]: APP_STORE_APP_CONFIG,
    [APPS.TITLE_STRATEGY]: TITLE_STRATEGY_APP_CONFIG,
    [APPS.DYNAMIC_GRID]: DYNAMIG_GRID_APP_CONFIG,
}

