import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appCountUp]',
  standalone: true,
})
export class CountUpDirective implements AfterViewInit, OnDestroy {
  @Input() appCountUp = 0;
  @Input() countSuffix = '';
  @Input() countDuration = 1400;

  private observer?: IntersectionObserver;
  private hasRun = false;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const element = this.el.nativeElement;

    if (typeof IntersectionObserver === 'undefined') {
      element.textContent = `${this.appCountUp}${this.countSuffix}`;
      return;
    }

    this.observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && !this.hasRun) {
          this.hasRun = true;
          this.animate(element);
          this.observer?.unobserve(element);
        }
      }
    }, { threshold: 0.4 });

    this.observer.observe(element);
  }

  private animate(element: HTMLElement): void {
    const target = this.appCountUp;
    const start = performance.now();
    const duration = this.countDuration;

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      element.textContent = `${value}${this.countSuffix}`;
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
