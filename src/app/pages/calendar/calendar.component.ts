import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  meetings = {
    '2024-04-05': ['Dring Coffee', 'Learn React', 'Sleep'],
    '2024-04-06': ['Dring Coffee', 'Learn Angular', 'Sleep'],
  };


  ngOnInit(): void {
  }


}
