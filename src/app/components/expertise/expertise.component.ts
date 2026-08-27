import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { IconComponent } from '../shared/icon/icon.component';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [CommonModule, IconComponent, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './expertise.component.html',
  styleUrl: './expertise.component.scss',
})
export class ExpertiseComponent {
  constructor(public data: PortfolioDataService) {}
}
