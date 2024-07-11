import { InjectionToken, WritableSignal } from "@angular/core";

//TODO: Maybe this should be coming from APP base config ? 
export const APP_TITLE = new InjectionToken<string>('APP_TITLE');

export const APP_CURRENT_TITLE = new InjectionToken<WritableSignal<string | undefined>>('APP_CURRENT_TITLE');

export const APP_CURRENT_PAGE_HEADER = new InjectionToken<WritableSignal<string | undefined>>('APP_CURRENT_PAGE_HEADER');