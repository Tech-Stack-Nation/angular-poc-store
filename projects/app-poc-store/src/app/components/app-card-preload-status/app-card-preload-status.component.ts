import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, Signal } from '@angular/core';
import { getScriptsInFlatList, LazyScriptLoaderService, ScriptLoadingState } from 'lib-lazyload-util';
import { STORE_POC_APP_CARD_TOKEN } from '../../config/providers';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-app-card-preload-status',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  template: `
     <section class="absolute right-4 bottom-2">
      @switch(app_scripts_state()) {
        @case(ScriptLoadingState.INIT) {
          <mat-icon class="text-lg px-2 py-0.5 !size-auto border border-gray-400 rounded-full" fontIcon="download"></mat-icon>
        }
        @case(ScriptLoadingState.LOADING) {
          <mat-spinner class="!size-5 mb-2"></mat-spinner>
        }
        @case(ScriptLoadingState.ERROR) {
          <mat-icon class="text-lg px-2 py-0.5 !size-auto border text-red-800 border-red-800 rounded-full" fontIcon="close"></mat-icon>
        }
        @case(ScriptLoadingState.FINISHED) {
          <mat-icon class="text-lg px-2 py-0.5 !size-auto border text-green-800 border-green-800 rounded-full" fontIcon="check"></mat-icon>
        }
      }
    </section>
  `,
  styleUrl: './app-card-preload-status.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppCardPreloadStatusComponent {

  protected readonly data = inject(STORE_POC_APP_CARD_TOKEN);

  protected readonly lazyloadService = inject(LazyScriptLoaderService);

  ScriptLoadingState = ScriptLoadingState;

  protected readonly app_scripts_state: Signal<ScriptLoadingState> = computed(() => {
    const app = this.data.config;
    const activeScripts = this.lazyloadService.scripts();
    const filteredScripts = activeScripts.filter((script) => getScriptsInFlatList(app.scriptsToPreload).map(
      (script) => script.src).includes(script.src));

    if (app.scriptsToPreload.length === 0) {
      return ScriptLoadingState.FINISHED;
    }

    const initializedScripts = filteredScripts.filter((script) => script.state === ScriptLoadingState.INIT);
    const loadingScripts = filteredScripts.filter((script) => script.state === ScriptLoadingState.LOADING);
    const scriptsWithError = filteredScripts.filter((script) => script.state === ScriptLoadingState.ERROR);

    if(scriptsWithError.length > 0) {
      return ScriptLoadingState.ERROR;
    }

    if (filteredScripts.length === 0 || (initializedScripts.length > 0 && loadingScripts.length === 0)) {
      return ScriptLoadingState.INIT;
    }

    if(loadingScripts.length > 0) {
      return ScriptLoadingState.LOADING;
    }

    return ScriptLoadingState.FINISHED;
  });
 }
