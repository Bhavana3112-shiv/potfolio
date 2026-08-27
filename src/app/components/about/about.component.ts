import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { IconComponent } from '../shared/icon/icon.component';
import { RevealDirective } from '../../directives/reveal.directive';
import { CountUpDirective } from '../../directives/count-up.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, IconComponent, RevealDirective, CountUpDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  constructor(public data: PortfolioDataService) {}
}
