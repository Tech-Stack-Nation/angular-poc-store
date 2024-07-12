import { AfterViewInit, ChangeDetectionStrategy, Component, EnvironmentInjector, inject, Injector, StaticProvider, ViewChild, ViewContainerRef } from '@angular/core';
import { AppCardComponent } from '../app-card/app-card.component';
import { STORE_POC_APP_CARD_TOKEN } from '../../config/providers';
import { APP_MODULES } from '@config/apps';
import { APPS } from '@config/app-list';

@Component({
  selector: 'app-store-page',
  standalone: true,
  imports: [],
  template: `
    <section class="w-full grid grid-cols-4 gap-4">
      <ng-container #apps></ng-container>
    </section>
   `,
  styleUrl: './store-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StorePageComponent implements AfterViewInit{

  protected readonly APP_DATA = Object.values(APP_MODULES).filter((app) => app.key !== APPS.STORE);

  protected readonly parentInjector = inject(EnvironmentInjector);

  @ViewChild('apps', { read: ViewContainerRef }) apps!: ViewContainerRef;

  ngAfterViewInit(): void {
    for (let i = 0; i < this.APP_DATA.length; i++) {
      this.apps.createComponent(AppCardComponent, { 
        injector: Injector.create([
          { provide: STORE_POC_APP_CARD_TOKEN, useValue: { config: this.APP_DATA[i] }}
      ] as StaticProvider[], this.parentInjector) });
    }
  }
 }
