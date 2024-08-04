import { Mission } from './../../models/page-model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-mission',
  templateUrl: './our-mission.component.html',
  styleUrls: ['./our-mission.component.scss']
})
export class OurMissionComponent implements OnInit {
  @Input() mission: Mission;

  constructor() { }

  ngOnInit(): void {
  }

}
