import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { IconComponent } from '../shared/icon/icon.component';
import { RevealDirective } from '../../directives/reveal.directive';
import { Project } from '../../models/portfolio.models';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, IconComponent, RevealDirective, ProjectModalComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  selectedProject = signal<Project | null>(null);

  constructor(public data: PortfolioDataService) {}

  open(project: Project): void {
    this.selectedProject.set(project);
  }

  close(): void {
    this.selectedProject.set(null);
  }
}
