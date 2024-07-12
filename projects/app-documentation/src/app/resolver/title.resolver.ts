import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { DOCS_MODULES } from "@config/apps";
import { filter, map, Observable, of } from "rxjs";

export const titleResolver: ResolveFn<string> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<string> =>
    of(route.paramMap.get('articleKey') || '').pipe(
      map((key) => Object.values(DOCS_MODULES).find((config) => config.key === key)!.link),
      filter<string>((title: string) => !!title),
      map((title: string): string => `${title}`)
    );