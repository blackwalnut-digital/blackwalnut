import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSmoothScroll]',
  standalone: true
})
export class SmoothScrollDirective {

  constructor() { }

  @Input('appSmoothScroll') targetId: string;

  @HostListener('click') onClick() {
    const element = document.getElementById(this.targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
