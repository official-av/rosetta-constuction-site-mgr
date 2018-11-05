import {Component, OnInit} from '@angular/core';
import {CoreService} from '../core.service';
import {Item} from '../models/item.model';
import {Labor} from '../models/labor.model';
import {Material} from '../models/material.model';
import {Machinery} from '../models/machinery.model';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  activities: Promise<any>;
  schedules: Array<Item> = [];
  labors: Array<Labor> = [];
  materials: Array<Material> = [];
  machines: Array<Machinery> = [];

  constructor(private coreService: CoreService) {
    // this.activities=this.coreService.fetchActivities();
  }


  ngOnInit() {
  }

}
