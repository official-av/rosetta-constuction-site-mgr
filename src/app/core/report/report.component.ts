import {Component, OnInit} from '@angular/core';
import {Activity} from '../models/activity.model';
import { CoreService } from '../core.service';
import { Schedule } from '../models/schedule.model';
import { Labor } from '../models/labor.model';
import { Material } from '../models/material.model';
import { Machinery } from '../models/machinery.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  activities: Promise<Array<Activity>>;
  schedules:Array<Schedule>=[];
  labors:Array<Labor>=[];
  materials:Array<Material>=[];
  machines:Array<Machinery>=[];

  constructor(private coreService:CoreService) {
    this.activities=this.coreService.fetchActivities();
  }



  ngOnInit() {
  }

}
