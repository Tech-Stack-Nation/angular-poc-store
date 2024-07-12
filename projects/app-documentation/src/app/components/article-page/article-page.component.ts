import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>article-page works!</p>`,
  styleUrl: './article-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ArticlePageComponent { }
