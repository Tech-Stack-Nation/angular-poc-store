import { Component, inject, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  protected readonly matIconRegistry = inject(MatIconRegistry);

  ngOnInit(): void {
    const defaultFontSetClasses = this.matIconRegistry.getDefaultFontSetClass();
    const outlinedFontSetClasses = defaultFontSetClasses
      .filter((fontSetClass) => fontSetClass !== 'material-icons')
      .concat(['material-symbols-outlined']);
    this.matIconRegistry.setDefaultFontSetClass(...outlinedFontSetClasses);
  }

}
