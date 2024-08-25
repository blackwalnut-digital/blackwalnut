import { Router } from '@angular/router';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ServiceCard } from 'src/app/models/page-model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  @ViewChild('targetElement') targetElement: ElementRef;

  @Input() services: ServiceCard[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // scrollToElement(id: string) {
  //   const element = document.getElementById(id);

  //   if (element) {
  //     this.targetElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }

  // navigateToDetails(id: string, event: MouseEvent) {
  //   event.preventDefault();
  //   this.router.navigate(['/services'], { fragment: id });

  // }



}
