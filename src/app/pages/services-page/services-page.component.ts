import { Component, OnInit } from '@angular/core';
import { Pages, Service } from 'src/app/models/page-model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-services-page',
  standalone: false,
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.scss'
})
export class ServicesPageComponent implements OnInit {
  services: Service[]

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe({
      next: (data) => {
        this.services = data.services;
      },
      error: (error) => {console.error(error);},
      complete: () => {console.log('Request complete');}
    });
  }
}
