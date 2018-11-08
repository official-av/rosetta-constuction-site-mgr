import {Component, OnInit} from '@angular/core';
import {Task} from '../models/task.model';
import {CoreService} from '../core.service';
import {ModalService} from '../modal.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  tasks: Array<Task>;
  temp: Array<Task> = [
    {
      'expected_progress': 49.54666666666666,
      'actual_progress': 6.333333333333333,
      'items': [
        {
          'id': 1,
          'start_date': '2018-10-18',
          'end_date': '2018-10-30',
          'task': 'task1',
          'item': 'task1item1',
          'description': 'description1',
          'unit_cost': 100,
          'quantity': 20,
          'item_units': 'cc',
          'site_id': 1,
          'actual_progress': 1,
          'expected_progress': 100,
          'last_update': '2018-11-03'
        },
        {
          'id': 2,
          'start_date': '2018-10-18',
          'end_date': '2018-12-31',
          'task': 'task1',
          'item': 'task1item2',
          'description': 'description2',
          'unit_cost': 100,
          'quantity': 20,
          'item_units': 'cc',
          'site_id': 1,
          'actual_progress': 11,
          'expected_progress': 24.32,
          'last_update': '2018-11-03'
        },
        {
          'id': 3,
          'start_date': '2018-10-18',
          'end_date': '2018-12-31',
          'task': 'task1',
          'item': 'task1item3',
          'description': 'description3',
          'unit_cost': 100,
          'quantity': 20,
          'item_units': 'cc',
          'site_id': 1,
          'actual_progress': 7,
          'expected_progress': 24.32,
          'last_update': '2018-11-03'
        }
      ],
      'task': 'task1'
    },
    {
      'expected_progress': 16.213333333333335,
      'actual_progress': 0,
      'items': [
        {
          'id': 4,
          'start_date': '2018-10-18',
          'end_date': '2018-12-31',
          'task': 'task2',
          'item': 'task2item1',
          'description': 'description1',
          'unit_cost': 100,
          'quantity': 20,
          'item_units': 'cc',
          'site_id': 1,
          'actual_progress': 0,
          'expected_progress': 24.32,
          'last_update': '2018-11-02'
        },
        {
          'id': 5,
          'start_date': '2018-10-18',
          'end_date': '2018-12-31',
          'task': 'task2',
          'item': 'task2item2',
          'description': 'description2',
          'unit_cost': 100,
          'quantity': 20,
          'item_units': 'cc',
          'site_id': 1,
          'actual_progress': 0,
          'expected_progress': 24.32,
          'last_update': '2018-11-02'
        },
        {
          'id': 6,
          'start_date': '2018-11-18',
          'end_date': '2018-12-31',
          'task': 'task2',
          'item': 'task2item3',
          'description': 'description3',
          'unit_cost': 100,
          'quantity': 20,
          'item_units': 'cc',
          'site_id': 1,
          'actual_progress': 0,
          'expected_progress': 0,
          'last_update': '2018-11-02'
        }
      ],
      'task': 'task2'
    }
  ];

  constructor(private coreService: CoreService, public modalService: ModalService) {
    this.tasks = this.temp;
    /*this.coreService.getProgress()
      .then((result: Array<Task>) => this.tasks = result);*/
  }

  ngOnInit() {
  }

}
