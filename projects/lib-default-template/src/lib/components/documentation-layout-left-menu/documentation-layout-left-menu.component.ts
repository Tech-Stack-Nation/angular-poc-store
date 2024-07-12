import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lib-documentation-layout-left-menu',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
  ],
  templateUrl: `./documentation-layout-left-menu.component.html`,
  styleUrl: './documentation-layout-left-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentationLayoutLeftMenuComponent { }
