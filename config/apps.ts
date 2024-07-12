import { Provider } from '@angular/core';
import { APPS } from './app-list';
import { DYNAMIG_GRID_APP_CONFIG } from '@projects/app-dynamic-grid/src/app/config/app';
import { TITLE_STRATEGY_APP_CONFIG } from '@projects/app-title-strategy-poc/src/app/config/app';
import { APP_STORE_APP_CONFIG } from '@projects/app-poc-store/src/app/config/app';

export interface APP_CONFIG {
    key: APPS,
    image: string;
    title: string;
    description: string;
    layoutComponent: any;
    route: APPS | string;
    routes: any;
}

export const APP_MODULES: Record<APPS, APP_CONFIG> = {
    [APPS.STORE]: APP_STORE_APP_CONFIG,
    [APPS.TITLE_STRATEGY]: TITLE_STRATEGY_APP_CONFIG,
    [APPS.DYNAMIC_GRID]: DYNAMIG_GRID_APP_CONFIG,
}