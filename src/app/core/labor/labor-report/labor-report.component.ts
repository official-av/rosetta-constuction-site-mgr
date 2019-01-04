import {Component, Input, OnInit} from '@angular/core';
import {Labor2} from '../../models/newlabor.model';
import {CoreService} from '../../core.service';

@Component({
  selector: 'app-labor-report',
  templateUrl: './labor-report.component.html',
  styleUrls: ['./labor-report.component.scss']
})
export class LaborReportComponent implements OnInit {
  labors: Array<Labor2> = [{
    'site_id': 1,
    'id': 4,
    'type': 'General',
    'daily': 1,
    'male_count': 2,
    'male_rate': 400,
    'female_count': 3,
    'female_rate': 400,
    'work_done': 'walls',
    'last_updated': '2018-12-07 08:07:59',
    'date': '2018-12-07',
    'total': 2000
  }, {
    'site_id': 1,
    'id': 5,
    'type': 'General',
    'daily': 1,
    'male_count': 2,
    'male_rate': 400,
    'female_count': 3,
    'female_rate': 400,
    'work_done': 'walls',
    'last_updated': '2018-12-07 15:55:35',
    'date': '2018-12-07',
    'total': 2000
  }, {
    'site_id': 1,
    'id': 6,
    'type': 'General',
    'daily': 1,
    'male_count': 2,
    'male_rate': 400,
    'female_count': 3,
    'female_rate': 400,
    'work_done': 'walls',
    'last_updated': '2018-12-07 16:03:21',
    'date': '2018-12-07',
    'total': 2000
  }];
  @Input() start_date: string;
  @Input() end_date: string;
  displayedColumns: string[] = ['type', 'male', 'female', 'daily', 'workdone', 'total'];

  constructor(private coreService: CoreService) {

  }

  ngOnInit() {
    this.coreService.getLaborReport(this.start_date, this.end_date)
      .then((result: Array<Labor2>) => this.labors = result)
      .catch(error => console.log(error));
  }

}
