import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DOCS_MODULES } from '@config/apps';
import { MarkdownComponent, MarkdownService } from 'ngx-markdown'

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
    
    this.markdownService.reload();

    return `docs/${config!.folder}/README.md`;
  });

}
