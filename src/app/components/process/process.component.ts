import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { IconComponent } from '../shared/icon/icon.component';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule, IconComponent, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss',
})
export class ProcessComponent {
  constructor(public data: PortfolioDataService) {}
}
