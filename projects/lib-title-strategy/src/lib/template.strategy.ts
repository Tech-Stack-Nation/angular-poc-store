import { inject, Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { RouterStateSnapshot, TitleStrategy } from "@angular/router";
import { APP_CURRENT_PAGE_HEADER, APP_CURRENT_TITLE, APP_TITLE } from "./providers";

@Injectable()
export class TemplatePageTitleStrategy extends TitleStrategy {

 protected readonly APP_TITLE = inject(APP_TITLE);

 protected readonly APP_CURRENT_TITLE = inject(APP_CURRENT_TITLE);

 protected readonly APP_CURRENT_PAGE_HEADER = inject(APP_CURRENT_PAGE_HEADER);

 private readonly title = inject(Title);

  constructor() {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {

      this.title.setTitle(`${this.APP_TITLE} | ${title}`);
      this.APP_CURRENT_TITLE.update(() => `${this.APP_TITLE} | ${title}`);
      this.APP_CURRENT_PAGE_HEADER.update(() => title);
    }
  }
}