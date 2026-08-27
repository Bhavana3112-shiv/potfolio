import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../shared/icon/icon.component';
import { Project } from '../../models/portfolio.models';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss',
})
export class ProjectModalComponent {
  @Input() project: Project | null = null;
  @Output() closed = new EventEmitter<void>();

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.project) {
      this.closed.emit();
    }
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closed.emit();
    }
  }
}
