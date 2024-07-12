import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DocumentationLayoutLeftMenuComponent } from '../documentation-layout-left-menu/documentation-layout-left-menu.component';

@Component({
  selector: 'lib-documentation-layout',
  standalone: true,
  imports: [RouterOutlet, DocumentationLayoutLeftMenuComponent],
  styleUrl: './documentation-layout.component.scss',
  templateUrl: `./documentation-layout.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: []
})
export class DocumentationLayoutComponent { }
