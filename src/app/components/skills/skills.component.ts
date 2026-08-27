import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { IconComponent } from '../shared/icon/icon.component';
import { RevealDirective } from '../../directives/reveal.directive';
import { SkillCategory } from '../../models/portfolio.models';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, IconComponent, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  activeCategory: ReturnType<typeof signal<string>>;

  constructor(public data: PortfolioDataService) {
    this.activeCategory = signal<string>(this.data.skillCategories[0].key);
  }

  setActive(category: SkillCategory): void {
    this.activeCategory.set(category.key);
  }

  isActive(category: SkillCategory): boolean {
    return this.activeCategory() === category.key;
  }

  get activeSkills(): SkillCategory {
    return this.data.skillCategories.find((c) => c.key === this.activeCategory())!;
  }

  initials(name: string): string {
    const cleaned = name.replace(/[^a-zA-Z0-9 .]/g, '');
    const parts = cleaned.split(' ').filter(Boolean);
    if (parts.length === 1) {
      return parts[0].slice(0, 2);
    }
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
}
