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

  constructor(public coreService: CoreService) {
  }

  ngOnInit() {
    this.getLabor();
  }

  getLabor() {
    this.coreService.fetchLabor()
      .then((result: Array<Labor>) => this.labors = result)
      .catch(error => console.log(error));
  }

  deleteLabor(labor: Labor) {
    if (confirm('Are you sure?')) {
      this.coreService.deleteLabor(labor)
        .then(result => this.getLabor())
        .catch(error => console.log(error));
    }
  }

}
