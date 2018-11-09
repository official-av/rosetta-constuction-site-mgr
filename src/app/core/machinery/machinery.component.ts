import {Component, OnInit} from '@angular/core';
import {Machinery} from '../models/machinery.model';
import {CoreService} from '../core.service';

@Component({
  selector: 'app-machinery',
  templateUrl: './machinery.component.html',
  styleUrls: ['./machinery.component.scss']
})
export class MachineryComponent implements OnInit {
  machines: Array<Machinery> = [];

  constructor(public coreService: CoreService) {
  }

  ngOnInit() {
    this.getMachinery();
  }

  getMachinery() {
    this.coreService.fetchMachinery()
      .then((result: Array<Machinery>) => this.machines = result)
      .catch(error => console.log(error));
  }

}
