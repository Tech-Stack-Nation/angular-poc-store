import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DynamicGridComponent } from 'lib-dynamic-grid';

@Component({
  selector: 'app-team-list-page',
  standalone: true,
  imports: [
    MatCardModule,
    DynamicGridComponent
  ],
  template: `
    <mat-card appearance="outlined">
      <mat-card-content>
        <dynamic-grid></dynamic-grid>
      </mat-card-content>
    </mat-card>
  `,
  styleUrl: './team-list-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TeamListPageComponent { }
