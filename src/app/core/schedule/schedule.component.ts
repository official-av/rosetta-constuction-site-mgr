import {Component, OnInit} from '@angular/core';
import {CoreService} from '../core.service';
import {Schedule} from '../models/schedule.model';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  schedules: Array<Schedule> = [];

  constructor(public coreService: CoreService) {
  }

  ngOnInit() {
    this.getSchedules();
  }

  getSchedules() {
    this.coreService.fetchSchedules()
      .then((result: Array<Schedule>) => this.schedules = result)
      .catch(error => console.log(error));
  }

  deleteSchedule(sch: Schedule) {
    if (confirm('Are you sure?')) {
      this.coreService.deleteSchedule(sch)
        .then(result => this.getSchedules())
        .catch(error => console.log(error));
    }
  }

}
