import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, computed, inject, Input, input, OnChanges, signal, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DOCS_MODULES } from '@config/apps';
import { MarkdownComponent, MarkdownService } from 'ngx-markdown'

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
export default class ArticlePageComponent{

  protected readonly markdownService = inject(MarkdownService);

  articleKey = input.required<string>();

  protected readonly path = computed(() => {
    const articleKey = this.articleKey();

    const config = Object.values(DOCS_MODULES).find((config) => config.key === articleKey);
    
    // Want to have this callback done after main loop is completed.
    setTimeout(() => {
      this.markdownService.reload();
    }, 0);

    return `docs/${config!.folder}/README.md`;
  });




  ngOnChanges(changes: SimpleChanges): void {
    if(changes['articleKey'] && changes['articleKey'].currentValue && !changes['articleKey'].firstChange) {

    
    }
  }
}
