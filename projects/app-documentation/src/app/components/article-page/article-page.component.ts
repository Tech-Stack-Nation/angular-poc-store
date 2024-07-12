import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, signal, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownComponent } from 'ngx-markdown'

// import 'prismjs';
// import 'prismjs/components/prism-typescript.min.js';
// import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
// import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
// import 'emoji-toolkit/lib/js/joypixels.min.js';
// import 'mermaid/dist/mermaid.min.js';


@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MarkdownComponent,
  ],
  providers: [],
  templateUrl: `./article-page.component.html`,
  styleUrl: './article-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export default class ArticlePageComponent {}
