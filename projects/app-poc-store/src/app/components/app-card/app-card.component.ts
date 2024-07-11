import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { STORE_POC_APP_CARD_TOKEN } from '../../config/providers';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-app-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterLink,
  ],
  template: `
       <mat-card appearance="outlined">
       <mat-card-header>
          <div mat-card-avatar class="author"></div>
          <mat-card-title>{{data.config.title}}</mat-card-title>
          <mat-card-subtitle>Pavel Suk</mat-card-subtitle>
        </mat-card-header>
        <img mat-card-image [src]="data.config.image" class="h-56 object-cover" alt="App Photo">
        <mat-card-content>
            <p class="text-base py-2">{{data.config.description}}</p>
        </mat-card-content>
        <mat-card-actions>
          <a mat-button routerLink="/{{data.config.route}}">View demo</a>
        </mat-card-actions>
    </mat-card>
  `,
  styleUrl: './app-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppCardComponent {

  protected readonly data = inject(STORE_POC_APP_CARD_TOKEN);

}
