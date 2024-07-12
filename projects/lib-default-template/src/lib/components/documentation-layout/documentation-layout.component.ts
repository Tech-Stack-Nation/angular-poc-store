import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'lib-documentation-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: `./documentation-layout.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: []
})
export class DocumentationLayoutComponent { }
