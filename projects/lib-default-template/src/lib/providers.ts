import { InjectionToken } from "@angular/core";
import { PAGE } from "../public-api";
import { TemplateSettings } from "./models/template-setting.interface";
import { DOCS_PAGE_CONFIG } from "./models/docs-page.viewmodel";

export const APP_CONFIG_PAGE_TOKEN = new InjectionToken<PAGE[]>('APP_CONFIG_PAGE_TOKEN');
export const DOCS_LINKS_CONFIG_PAGE_TOKEN = new InjectionToken<DOCS_PAGE_CONFIG[]>('DOCS_LINKS_CONFIG_PAGE_TOKEN');
export const APP_CONFIG_TEMPLATE_SETTINGS_TOKEN = new InjectionToken<TemplateSettings>('APP_CONFIG_TEMPLATE_SETTINGS_TOKEN');