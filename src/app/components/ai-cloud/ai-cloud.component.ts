import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-ai-cloud',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ai-cloud.component.html',
  styleUrl: './ai-cloud.component.scss',
})
export class AiCloudComponent {
  constructor(public data: PortfolioDataService) {}

  angleFor(index: number): string {
    const step = 360 / this.data.aiCloudNodes.length;
    return `${index * step}deg`;
  }
}
