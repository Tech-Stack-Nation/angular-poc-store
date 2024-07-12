import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { LazyScriptLoaderService } from "../services/lazy-script-loader.service";
import { inject } from "@angular/core";

export const lazyLoadScriptsResolver: ResolveFn<boolean> = async (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
): Promise<boolean> => {
    const lazyService = inject(LazyScriptLoaderService)
    await lazyService.load(
        "scripts/prismjs/prism.js",
        "scripts/emoji-toolkit/lib/js/joypixels.min.js",
        "scripts/mermaid/dist/mermaid.min.js",
    );

    await lazyService.load(
        "scripts/prismjs/components/prism-typescript.min.js", 
        "scripts/prismjs/plugins/line-numbers/prism-line-numbers.js",
        "scripts/prismjs/plugins/line-highlight/prism-line-highlight.js",
    );
    return Promise.resolve(true);
}
