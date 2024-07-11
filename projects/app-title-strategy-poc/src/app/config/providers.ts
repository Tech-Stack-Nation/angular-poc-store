import { Provider, signal } from "@angular/core";
import { APP_CONFIG_PAGE_TOKEN } from "lib-default-template";
import { APP_CURRENT_PAGE_HEADER, APP_CURRENT_TITLE, APP_TITLE } from "lib-title-strategy";
import { TITLE_STRATEGY_APP_PAGE_ROUTES } from "./pages";

export const TITLE_STRATEGY_APP_PROVIDERS: Provider[] = [
    { provide: APP_TITLE, useValue: 'Title Strategy POC' },
    { provide: APP_CURRENT_TITLE, useValue: signal(undefined) },
    { provide: APP_CURRENT_PAGE_HEADER, useValue: signal(undefined) },
    { provide: APP_CONFIG_PAGE_TOKEN, useValue: TITLE_STRATEGY_APP_PAGE_ROUTES },
]