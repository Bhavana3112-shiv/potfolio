import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  @Input() appReveal = '';

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const element = this.el.nativeElement;
    element.classList.add('reveal');
    if (this.appReveal) {
      element.classList.add(this.appReveal);
    }

    if (typeof IntersectionObserver === 'undefined') {
      element.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            element.classList.add('is-visible');
            this.observer?.unobserve(element);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
