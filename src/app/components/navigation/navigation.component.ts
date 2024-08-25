import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  scrolled: boolean = false;
  isMenuOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollThreshold = 2;
    this.scrolled = window.scrollY > scrollThreshold;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
