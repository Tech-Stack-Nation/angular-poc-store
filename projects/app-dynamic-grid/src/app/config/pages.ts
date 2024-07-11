import { Routes } from "@angular/router";
import { APPS } from "@config/app-list";
import { PAGE } from "lib-default-template";
import { DynamicDataSource, GRID_CONFIG_TOKEN, GRID_DATA_SOURCE_TOKEN } from "lib-dynamic-grid";
import { Team } from "../models/entity/team";
import { inject, signal } from "@angular/core";
import { MockDataService } from "../services/mock-data.service";
import { of } from "rxjs";
import { TeamGrid } from "../components/team-list-page/team.grid";
import { ProjectGrid } from "../components/project-list-page/project.grid";
import { Project } from "../models/entity/project";

export const DYNAMIC_GRID_APP_PAGES = {
    DASHBOARD: new PAGE(
        {
            path: "dashboard",
            loadComponent: () => import('../components/dashboard-page/dashboard-page.component'),
            title: "Dashboard",
            providers: []
        },
        'Dashboard',
        APPS.DYNAMIC_GRID,
    ),
    TEAMS: new PAGE(
        {
            path: "teams",
            loadComponent: () => import('../components/team-list-page/team-list-page.component'),
            title: "Teams",
            providers: [
                {
                    provide: GRID_DATA_SOURCE_TOKEN, useFactory: () => {
                        return new DynamicDataSource<Team>(of(inject(MockDataService).getTeams()))
                    }
                },
                { provide: GRID_CONFIG_TOKEN, useValue: signal(TeamGrid) }
            ]
        },
        'Teams',
        APPS.DYNAMIC_GRID,
    ),
    PROJECTS: new PAGE(
        {
            path: "projects",
            loadComponent: () => import('../components/project-list-page/project-list-page.component'),
            title: "Projects",
            providers: [
                {
                    provide: GRID_DATA_SOURCE_TOKEN, useFactory: () => {
                        return new DynamicDataSource<Project>(of(inject(MockDataService).getProjects()))
                    }
                },
                { provide: GRID_CONFIG_TOKEN, useValue: signal(ProjectGrid) }
            ]
        },
        'Projects',
        APPS.DYNAMIC_GRID,
    ),
}

export const DYNAMIC_GRID_APP_PAGE_ROUTES: Routes = [...Object.values(DYNAMIC_GRID_APP_PAGES).map(page => page.route),
{ path: '', redirectTo: DYNAMIC_GRID_APP_PAGES.DASHBOARD.partialLink, pathMatch: 'full' }
];