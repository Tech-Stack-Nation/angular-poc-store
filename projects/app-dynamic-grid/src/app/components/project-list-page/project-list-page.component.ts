import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DynamicGridComponent, DynamicGridFilterComponent, GRID_CONFIG_TOKEN } from 'lib-dynamic-grid';

@Component({
  selector: 'app-project-list-page',
  standalone: true,
  imports: [
    MatCardModule,
    DynamicGridComponent,
    MatButtonModule,
    DynamicGridFilterComponent,
    MatIconModule,
  ],
  templateUrl: './project-list-page.component.html',
  styleUrl: './project-list-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProjectListPageComponent { 
  protected readonly structure = inject(GRID_CONFIG_TOKEN);

  protected readonly isBudgetVisible = computed(() => {
    const columns = this.structure();

    const foundColumn = columns.find(column => column.dataKey === "budget");

    if(foundColumn) {
      return foundColumn.visible;
    }

    return false;
  })

  protected toggleVisibleBudgetColumns(state: boolean) {
    const columns = this.structure();

    for (let i = 0; i < columns.length; i++) {
      const element = columns[i];
      
      if(element.dataKey === "budget") {
        element.visible = state;
      }
    }

    this.structure.update(() => [...columns]);
  }
}
