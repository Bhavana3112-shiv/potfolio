import { AfterViewInit, Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { RevealDirective } from '../../directives/reveal.directive';
import { ArchitectureNode } from '../../models/portfolio.models';

interface ConnectionLine {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  key: string;
}

@Component({
  selector: 'app-architecture',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './architecture.component.html',
  styleUrl: './architecture.component.scss',
})
export class ArchitectureComponent implements AfterViewInit {
  @ViewChild('grid') gridRef!: ElementRef<HTMLElement>;
  @ViewChildren('nodeEl') nodeEls!: QueryList<ElementRef<HTMLElement>>;

  activeNode: ArchitectureNode | null = null;
  lines: ConnectionLine[] = [];
  viewBoxWidth = 0;
  viewBoxHeight = 0;

  constructor(public data: PortfolioDataService) {}

  ngAfterViewInit(): void {
    setTimeout(() => this.computeLines(), 60);
    this.nodeEls.changes.subscribe(() => setTimeout(() => this.computeLines(), 60));
  }

  @HostListener('window:resize')
  onResize(): void {
    this.computeLines();
  }

  setActive(node: ArchitectureNode | null): void {
    this.activeNode = node;
  }

  private computeLines(): void {
    if (!this.gridRef) {
      return;
    }
    const containerRect = this.gridRef.nativeElement.getBoundingClientRect();
    this.viewBoxWidth = containerRect.width;
    this.viewBoxHeight = containerRect.height;

    const centers = new Map<string, { x: number; y: number }>();
    this.nodeEls.forEach((elRef) => {
      const id = elRef.nativeElement.getAttribute('data-node-id');
      if (!id) return;
      const rect = elRef.nativeElement.getBoundingClientRect();
      centers.set(id, {
        x: rect.left - containerRect.left + rect.width / 2,
        y: rect.top - containerRect.top + rect.height / 2,
      });
    });

    this.lines = this.data.architectureConnections
      .map((conn) => {
        const from = centers.get(conn.from);
        const to = centers.get(conn.to);
        if (!from || !to) return null;
        return { x1: from.x, y1: from.y, x2: to.x, y2: to.y, key: `${conn.from}-${conn.to}` };
      })
      .filter((l): l is ConnectionLine => l !== null);
  }
}
