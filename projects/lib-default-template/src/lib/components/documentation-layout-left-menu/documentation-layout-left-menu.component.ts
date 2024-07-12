import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DOCS_LINKS_CONFIG_PAGE_TOKEN } from '../../providers';

@Component({
  selector: 'lib-documentation-layout-left-menu',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: `./documentation-layout-left-menu.component.html`,
  styleUrl: './documentation-layout-left-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentationLayoutLeftMenuComponent { 

  apps = Object.values(inject(DOCS_LINKS_CONFIG_PAGE_TOKEN)).filter((config) => config.type === 'APP');

  libs = Object.values(inject(DOCS_LINKS_CONFIG_PAGE_TOKEN)).filter((config) => config.type === 'LIB');
}
