import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { APP_CONFIG_PAGE_TOKEN, APP_CONFIG_TEMPLATE_SETTINGS_TOKEN } from '../../providers';

@Component({
  selector: 'app-layout-menu',
  standalone: true,
  imports: [
    RouterLink, RouterLinkActive,
  ],
  template: `
    <div class="ml-10 flex items-baseline space-x-4 menu">
      @for (page of pages; track page;) {
        <a routerLink="/{{settings.useAppModulePathRoute ? page.fullLink : page.partialLink}}" routerLinkActive="menu-link-active" class="menu-link"> {{page.linkText}} </a>
      }
    </div>
  `,
  styleUrl: './layout-menu.component.scss',
})
export class LayoutMenuComponent {

  protected readonly settings = inject(APP_CONFIG_TEMPLATE_SETTINGS_TOKEN);

  protected readonly pages = Object.values(inject(APP_CONFIG_PAGE_TOKEN))
  .filter((page) => page.showInMenu);
 }
