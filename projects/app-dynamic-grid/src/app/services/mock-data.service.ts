import { Injectable } from '@angular/core';
import { Project } from '../models/entity/project';
import { Team } from '../models/entity/team';


@Injectable({
  providedIn: 'root'
})
export class MockDataService {

    projects: Project[] = [];

    teams: Team[] = [];

    getProjects() {
      if(this.projects.length > 0) {
        return this.projects;
      }

      // const projects = new Array<Project>();

      // for (let i = 0; i < 500; i++) {
      //   projects.push({
      //     id: faker.string.uuid(),
      //     title: faker.person.jobTitle(),
      //     createdDate: faker.date.recent(),
      //     endDate: faker.date.future(),
      //     budget: faker.number.int(),
      //     isActive: faker.datatype.boolean()
      //   })
      // }
      this.projects = [];
      return [];
    }

    getTeams() {
      if(this.teams.length > 0) {
        return this.teams;
      }

      // const teams = new Array<Team>();

      // for (let i = 0; i < 500; i++) {
      //   teams.push({
      //     id: faker.string.uuid(),
      //     title: faker.person.jobTitle(),
      //     numberOfUsers: faker.datatype.number({min: 0, max: 10}),
      //     isActive: faker.datatype.boolean()
      //   })
      // }
      this.teams = [];
      return [];
    }

}
