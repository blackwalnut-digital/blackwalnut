import { Pages } from '../../models/page-model';
import { DataService } from '../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  pages: Pages

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe({
      next: (data) => {
        this.pages = data;
        console.log(data);
      },
      error: (error) => {console.error(error);},
      complete: () => {console.log('Request complete');}
    });
  }

  mainImageSrc: string = "assets/img/global-visibility-reliable-support.svg"
  planItemIconSrc: string = "assets/img/check-plan-item.svg"
  starterPlanDescriptionImage: string = "assets/img/basic_plan_minimalistic_design_and_seo.jpg"
}
