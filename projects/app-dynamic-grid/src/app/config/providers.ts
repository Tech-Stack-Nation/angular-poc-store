import { InjectionToken, Provider, signal, WritableSignal } from "@angular/core";
import { APP_CONFIG_PAGE_TOKEN } from "lib-default-template";
import { APP_CURRENT_PAGE_HEADER, APP_CURRENT_TITLE, APP_TITLE } from "lib-title-strategy";
import { DashboardCardViewmodel } from "../models/dashboard-card.viewmodel";
import { DYNAMIC_GRID_APP_PAGES } from "./pages";

export const DYNAMIC_GRID_APP_PROVIDERS: Provider[] = [
    { provide: APP_TITLE, useValue: 'Dynamic Grid POC' },
    { provide: APP_CURRENT_TITLE, useValue: signal(undefined) },
    { provide: APP_CURRENT_PAGE_HEADER, useValue: signal(undefined) },
    { provide: APP_CONFIG_PAGE_TOKEN, useValue: DYNAMIC_GRID_APP_PAGES },
]

export const DYNAMIC_GRID_APP_DASHBOARD_CARD_TOKEN = new InjectionToken<WritableSignal<DashboardCardViewmodel>>('DYNAMIC_GRID_APP_DASHBOARD_CARD_TOKEN');

