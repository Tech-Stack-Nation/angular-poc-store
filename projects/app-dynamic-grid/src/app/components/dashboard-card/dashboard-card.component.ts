import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DYNAMIC_GRID_APP_DASHBOARD_CARD_TOKEN } from '../../config/providers';
import { DynamicGridComponent, GRID_DATA_SOURCE_TOKEN } from 'lib-dynamic-grid';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard-card',
  standalone: true,
  imports: [
    DynamicGridComponent,
    MatCardModule,
  ],
  template: `
    <mat-card appearance="outlined">
        <mat-card-content>
            <h1 class="font-bold text-xl">{{card().page.route.title}} ({{data.data.length}})</h1>
            <dynamic-grid>
                <section grid-header></section>
            </dynamic-grid>
        </mat-card-content>
    </mat-card>
  `,
  styleUrl: './dashboard-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardCardComponent { 

  protected readonly card = inject(DYNAMIC_GRID_APP_DASHBOARD_CARD_TOKEN);

  protected readonly data = inject(GRID_DATA_SOURCE_TOKEN);
}
