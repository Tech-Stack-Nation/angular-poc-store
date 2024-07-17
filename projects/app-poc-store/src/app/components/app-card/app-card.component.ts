import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, HostListener, inject, OnInit, Signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { STORE_POC_APP_CARD_TOKEN } from '../../config/providers';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AppCardPreloadStatusComponent } from '../app-card-preload-status/app-card-preload-status.component';
import { getScriptsInFlatList, LazyScriptLoaderService } from 'lib-lazyload-util';

@Component({
  selector: 'app-app-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterLink,
    AppCardPreloadStatusComponent,
  ],
  template: `
    <mat-card appearance="outlined">
        <mat-card-header>
            <img mat-card-avatar [src]="data.config.author.photo" class="author"/>
            <mat-card-title>{{data.config.title}}</mat-card-title>
            <mat-card-subtitle>{{data.config.author.name}}</mat-card-subtitle>
        </mat-card-header>
        <img mat-card-image [src]="data.config.image" class="h-56 object-cover" alt="App Photo">
        <mat-card-content>
              <p class="text-base py-2">{{data.config.description}}</p>
        </mat-card-content>
        <mat-card-actions>
          <a mat-button routerLink="/{{data.config.route}}">View demo</a>
        </mat-card-actions>
    </mat-card>
    <app-app-card-preload-status/>
  `,
  styleUrl: './app-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'relative'
  }
})
export class AppCardComponent {

  protected readonly data = inject(STORE_POC_APP_CARD_TOKEN);

  protected readonly lazyloadService = inject(LazyScriptLoaderService);

  @HostListener('mouseenter', ['$event'])
  cardHover(event: MouseEvent) {
    const app = this.data.config;
    
    if(app.scriptsToPreload.length === 0) {
      return;
    }

    const filteredScripts = this.lazyloadService.scripts().filter((script) => getScriptsInFlatList(app.scriptsToPreload).map(
      (script) => script.src).includes(script.src));
    
    if(filteredScripts.length === app.scriptsToPreload.length){
      return;
    }

    this.lazyloadService.load(app.scriptsToPreload);
  }

}
