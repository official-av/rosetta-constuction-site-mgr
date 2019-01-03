import {Component, OnInit} from '@angular/core';
import {Labor} from '../models/labor.model';
import {CoreService} from '../core.service';
import {Labor2} from '../models/newlabor.model';

@Component({
  selector: 'app-labor',
  templateUrl: './labor.component.html',
  styleUrls: ['./labor.component.scss']
})

export class LaborComponent implements OnInit {
  labors: Array<Labor2> = [];

  constructor(public coreService: CoreService) {
  }

  ngOnInit() {
    this.getLabor();
  }

  getLabor() {
    this.coreService.fetchLabor()
      .then((result: Array<Labor2>) => this.labors = result)
      .catch(error => console.log(error));
  }

}
