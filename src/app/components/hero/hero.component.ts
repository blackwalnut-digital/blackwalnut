import { PageComponent } from 'src/app/models/page-model';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input() header: PageComponent;

  constructor(private router: Router) { }

  ngOnInit(): void {}

  redirectToCalendar() {
    this.router.navigate(['/book-a-call']);
  }
}
