import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LayoutMenuComponent } from '../layout-menu/layout-menu.component';
import { APP_CURRENT_PAGE_HEADER } from 'lib-title-strategy';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    LayoutMenuComponent
  ],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {

  protected readonly pageTitle = inject(APP_CURRENT_PAGE_HEADER);

 }
