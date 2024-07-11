import { InjectionToken, WritableSignal } from "@angular/core";
import { DynamicDataSource } from "./models/dynamic-data-source";
import { GridColumnViewModel } from "./models/grid-column.viewmodel";

export const GRID_DATA_SOURCE_TOKEN = new InjectionToken<DynamicDataSource<unknown>>('DYNAMIC_GRID_DATA_SOURCE_TOKEN');

export const GRID_CONFIG_TOKEN = new InjectionToken<WritableSignal<GridColumnViewModel[]>>('DYNAMIC_GRID_CONFIG_TOKEN');