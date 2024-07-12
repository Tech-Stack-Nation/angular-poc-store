import { InjectionToken, Provider, signal, WritableSignal } from "@angular/core";
import { APP_CONFIG_PAGE_TOKEN } from "lib-default-template";
import { DOCUMENT_APP_PAGES } from "./pages";
import { APP_TITLE } from "lib-title-strategy";

export const DOCUMENT_APP_PROVIDERS: Provider[] = [
    { provide: APP_TITLE, useValue: 'Documentation' },
    { provide: APP_CONFIG_PAGE_TOKEN, useFactory: () => DOCUMENT_APP_PAGES },
]
