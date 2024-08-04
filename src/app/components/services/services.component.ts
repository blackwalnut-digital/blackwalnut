import { Component, Input, OnInit } from '@angular/core';
import { ServiceCard } from 'src/app/models/page-model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  @Input() services: ServiceCard[];

  constructor() { }

  ngOnInit(): void {
  }

}
