import { Routes } from "@angular/router";
import { PAGE } from "lib-default-template";
import { TITLE_STRATEGY_APP_PROVIDERS } from "./providers";

export const TITLE_STRATEGY_APP_PAGES: PAGE[] = [

]

export const TITLE_STRATEGY_APP_PAGE_ROUTES: Routes = [
    { path: '', providers: [TITLE_STRATEGY_APP_PROVIDERS]}
];