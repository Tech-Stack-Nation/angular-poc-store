import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { GRID_DATA_SOURCE_TOKEN } from '../../providers';

@Component({
  selector: 'dynamic-grid-filter',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatIcon,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
  ],
  templateUrl: './dynamic-grid-filter.component.html',
  styleUrl: './dynamic-grid-filter.component.scss',
})
export class DynamicGridFilterComponent {

  dataSource = inject(GRID_DATA_SOURCE_TOKEN);

  searchInput = new FormControl();

  constructor() {
    this.searchInput.valueChanges.pipe(debounceTime(300), distinctUntilChanged()).subscribe({
      next: (value) => {
        this.dataSource.filter = value;
      }
    })
  }
 }
