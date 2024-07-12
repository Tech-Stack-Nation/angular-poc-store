import { InjectionToken, Provider, signal, WritableSignal } from "@angular/core";
import { APP_CONFIG_PAGE_TOKEN } from "lib-default-template";
import { DashboardCardViewmodel } from "../models/dashboard-card.viewmodel";
import { DYNAMIC_GRID_APP_PAGES } from "./pages";
import { APP_TITLE } from "lib-title-strategy";

export const DYNAMIC_GRID_APP_PROVIDERS: Provider[] = [
    { provide: APP_TITLE, useValue: 'Dynamic Grid POC' },
    { provide: APP_CONFIG_PAGE_TOKEN, useFactory: () => DYNAMIC_GRID_APP_PAGES },
]

export const DYNAMIC_GRID_APP_DASHBOARD_CARD_TOKEN = new InjectionToken<WritableSignal<DashboardCardViewmodel>>('DYNAMIC_GRID_APP_DASHBOARD_CARD_TOKEN');

