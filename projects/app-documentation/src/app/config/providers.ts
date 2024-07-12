import { InjectionToken, Provider, signal, WritableSignal } from "@angular/core";
import { APP_CONFIG_PAGE_TOKEN, DOCS_LINKS_CONFIG_PAGE_TOKEN } from "lib-default-template";
import { DOCUMENT_APP_PAGES } from "./pages";
import { APP_TITLE } from "lib-title-strategy";
import { DOCS_MODULES } from "@config/apps";

export const DOCUMENT_APP_PROVIDERS: Provider[] = [
    { provide: APP_TITLE, useValue: 'Documentation' },
    { provide: DOCS_LINKS_CONFIG_PAGE_TOKEN, useValue: Object.values(DOCS_MODULES)},
    { provide: APP_CONFIG_PAGE_TOKEN, useFactory: () => DOCUMENT_APP_PAGES },
]
