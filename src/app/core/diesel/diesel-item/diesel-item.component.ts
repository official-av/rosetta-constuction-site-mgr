import {Component, Input, OnInit} from '@angular/core';
import {Diesel} from '../../models/diesel.model';
import {CoreService} from '../../core.service';

@Component({
  selector: 'app-diesel-item',
  templateUrl: './diesel-item.component.html',
  styleUrls: ['./diesel-item.component.scss']
})
export class DieselItemComponent implements OnInit {
  @Input() diesel: Diesel;

  constructor(public coreService: CoreService) {
  }

  ngOnInit() {
  }

}
