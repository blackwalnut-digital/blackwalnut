import { DataService } from '../../services/data.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-visibility',
  templateUrl: './visibility.component.html',
  styleUrls: ['./visibility.component.scss']
})
export class VisibilityComponent implements OnInit {
  @Input() header: string;

  constructor() { }

  ngOnInit(): void {}
}
