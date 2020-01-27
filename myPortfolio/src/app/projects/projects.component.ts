import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { PROJECTS } from '../projects_list';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  // projects = PROJECTS;
  projects: Project[];
  temp = "assets/project_logo.jpg";
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects().subscribe(projects => this.projects = projects);
  }
}




