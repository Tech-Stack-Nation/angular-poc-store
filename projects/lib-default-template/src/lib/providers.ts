import { InjectionToken } from "@angular/core";
import { PAGE } from "../public-api";
import { TemplateSettings } from "./models/template-setting.interface";

export const APP_CONFIG_PAGE_TOKEN = new InjectionToken<PAGE[]>('APP_CONFIG_PAGE_TOKEN');
export const APP_CONFIG_TEMPLATE_SETTINGS_TOKEN = new InjectionToken<TemplateSettings>('APP_CONFIG_TEMPLATE_SETTINGS_TOKEN');