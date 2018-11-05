import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../models/item.model';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  @Input() item: Item;

  constructor() {
  }

  ngOnInit() {
  }

}
