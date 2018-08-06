import {Component, OnInit} from '@angular/core';
import {Labor} from '../models/labor.model';
import {CoreService} from '../core.service';

@Component({
  selector: 'app-labor',
  templateUrl: './labor.component.html',
  styleUrls: ['./labor.component.scss']
})
export class LaborComponent implements OnInit {
  labors: Array<Labor> = [];
  temp = [
    {
      'site_id': 1,
      'id': 6,
      'type': 'Driver',
      'rate': 400,
      'receipt': null,
      'date': new Date('2018-08-05'),
      'number': 1
    },
    {
      'site_id': 1,
      'id': 7,
      'type': 'Driver',
      'rate': 400,
      'receipt': null,
      'date': new Date('2018-08-05'),
      'number': 1
    }
  ];

  constructor(private coreService: CoreService) {
    /*this.labors = this.temp;*/
    this.coreService.fetchLabor()
      .then((result: Array<Labor>) => this.labors = result)
      .catch(error => console.log(error));
  }

  ngOnInit() {
  }

}
