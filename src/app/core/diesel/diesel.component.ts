import {Component, OnInit} from '@angular/core';
import {CoreService} from '../core.service';
import {Diesel} from '../models/diesel.model';

@Component({
  selector: 'app-diesel',
  templateUrl: './diesel.component.html',
  styleUrls: ['./diesel.component.scss']
})
export class DieselComponent implements OnInit {
  diesel: Array<Diesel>;

  constructor(private coreService: CoreService) {
  }

  ngOnInit() {
    this.getDiesel();
    console.log(this.diesel);
  }

  getDiesel() {
    this.coreService.fetchDiesel()
      .then((result: Array<Diesel>) => this.diesel = result)
      .catch(error => console.log(error));
  }
}
