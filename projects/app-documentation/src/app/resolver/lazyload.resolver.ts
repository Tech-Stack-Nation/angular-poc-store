import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { debounceTime, filter, Observable, of, tap } from "rxjs";
import { effect, inject } from "@angular/core";
import { getScriptsInFlatList, LazyScriptLoaderService, Script, ScriptLoadingState } from "lib-lazyload-util";
import { toObservable } from '@angular/core/rxjs-interop';
import { DOCUMENTATION_APP_CONFIG } from "../config/app";
import { AppPreloadScript } from "@projects/lib-lazyload-util/src/public-api";

export const lazyLoadScriptsResolver: ResolveFn<Script[]> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
): Observable<Script[]> => {
    const lazyService = inject(LazyScriptLoaderService);
    const scriptsToLoad: AppPreloadScript[] = getScriptsInFlatList(DOCUMENTATION_APP_CONFIG.scriptsToPreload);

    lazyService.load(
        scriptsToLoad
    );

    return toObservable(lazyService.scripts).pipe(
        filter((scripts) =>
            scripts.filter((script) => 
                scriptsToLoad.map(
                    (script) => script.src).includes(script.src) && script.state === ScriptLoadingState.FINISHED)
            .length === scriptsToLoad.length
        ),
    )

}
