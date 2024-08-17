import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appFadeIn]',
  standalone: false
})
export class FadeInDirective {

  constructor() { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.fadeInOnScroll();
  }

  fadeInOnScroll() {
    const fadeInElements = document.querySelectorAll('.fade-in-element');
    fadeInElements.forEach((element: Element) => {
      if (this.isInViewport(element)) {
        element.classList.add('opacity-100');
      }
    });
  }

  isInViewport(element: Element): boolean {
    const rect = element.getBoundingClientRect();
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight);
  }

}
