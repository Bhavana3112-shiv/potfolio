import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { IconComponent } from '../shared/icon/icon.component';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, IconComponent, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent {
  constructor(public data: PortfolioDataService) {}
}
