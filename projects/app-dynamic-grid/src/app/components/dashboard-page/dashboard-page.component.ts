import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EnvironmentInjector, inject, Injector, signal, ViewChild, ViewContainerRef } from '@angular/core';
import { MockDataService } from '../../services/mock-data.service';
import { DynamicDataSource, GRID_CONFIG_TOKEN, GRID_DATA_SOURCE_TOKEN } from 'lib-dynamic-grid';
import { TeamsCardGrid } from './teams.card.grid';
import { ProjectCardGrid } from './project.card.grid';
import { DashboardCardComponent } from '../dashboard-card/dashboard-card.component';
import { DashboardCardViewmodel } from '../../models/dashboard-card.viewmodel';
import { DYNAMIC_GRID_APP_PAGES } from '../../config/pages';
import { DYNAMIC_GRID_APP_DASHBOARD_CARD_TOKEN } from '../../config/providers';
import { Project } from '../../models/entity/project';
import { Team } from '../../models/entity/team';
import { of } from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <section class="w-full grid grid-cols-2 gap-4">
      <ng-container #cards></ng-container>
    </section>
  `,
  styleUrl: './dashboard-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardPageComponent {
  protected readonly injector = inject(EnvironmentInjector);

  protected readonly mockService = inject(MockDataService);

  protected readonly teamData = signal<DashboardCardViewmodel>({ page: DYNAMIC_GRID_APP_PAGES.TEAMS});

  protected readonly projectData = signal<DashboardCardViewmodel>({ page: DYNAMIC_GRID_APP_PAGES.PROJECTS});

  @ViewChild('cards', { read: ViewContainerRef }) cards!: ViewContainerRef;

  ngAfterViewInit(): void {
    let teaminjector = Injector.create([
      { provide: DYNAMIC_GRID_APP_DASHBOARD_CARD_TOKEN, useValue: this.teamData},
      {
        provide: GRID_DATA_SOURCE_TOKEN, useValue: new DynamicDataSource<Team>(of(this.mockService.getTeams()))
      },
      { provide: GRID_CONFIG_TOKEN, useValue: signal(TeamsCardGrid) }
    ], this.injector);
    
    this.cards.createComponent(DashboardCardComponent, { injector: teaminjector });

    let projectinjector = Injector.create([
      { provide: DYNAMIC_GRID_APP_DASHBOARD_CARD_TOKEN, useValue: this.projectData},
      {
        provide: GRID_DATA_SOURCE_TOKEN, useValue: new DynamicDataSource<Project>(of(this.mockService.getProjects()))
      },
      { provide: GRID_CONFIG_TOKEN, useValue: signal(ProjectCardGrid) }
    ], this.injector);
    
    this.cards.createComponent(DashboardCardComponent, { injector: projectinjector });
  } 
 }
