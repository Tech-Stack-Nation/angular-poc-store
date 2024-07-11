import { InjectionToken, Provider, signal, WritableSignal } from "@angular/core";
import { APP_CONFIG_PAGE_TOKEN, APP_CONFIG_TEMPLATE_SETTINGS_TOKEN } from "lib-default-template";
import { APP_CURRENT_PAGE_HEADER, APP_CURRENT_TITLE, APP_TITLE } from "lib-title-strategy";
import { STORE_POC_APP_PAGES } from "./pages";
import { AppCardViewModel } from "../models/app-card.viewmodel";

export const STORE_POC_APP_PROVIDERS: Provider[] = [
    { provide: APP_TITLE, useValue: 'POC Store' },
    { provide: APP_CURRENT_TITLE, useValue: signal(undefined) },
    { provide: APP_CURRENT_PAGE_HEADER, useValue: signal(undefined) },
    { provide: APP_CONFIG_PAGE_TOKEN, useValue: STORE_POC_APP_PAGES },
    { provide: APP_CONFIG_TEMPLATE_SETTINGS_TOKEN, useValue: { useAppModulePathRoute: false }}
]

export const STORE_POC_APP_CARD_TOKEN = new InjectionToken<AppCardViewModel>('STORE_POC_APP_CARD_TOKEN');

