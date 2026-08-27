import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-background-fx',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './background-fx.component.html',
  styleUrl: './background-fx.component.scss',
})
export class BackgroundFxComponent {}
