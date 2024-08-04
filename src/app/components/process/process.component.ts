import { Component, Input, OnInit } from '@angular/core';
import { Process } from 'src/app/models/page-model';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {
  @Input() process: Process;

  constructor() { }

  ngOnInit(): void {
  }

}
