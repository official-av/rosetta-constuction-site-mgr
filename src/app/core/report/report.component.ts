import {Component, Input, OnInit} from '@angular/core';
import {CoreService} from '../core.service';
import {Report} from '../models/report.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  report: Report;
  @Input() mode = 'history';
  @Input() start_date: string;
  @Input() end_date: string;

  ngOnInit() {
  }

  constructor(private route: ActivatedRoute) {
    this.start_date = this.route.snapshot.queryParams['sdate'];
    this.end_date = this.route.snapshot.queryParams['edate'];
  }

  /*fetchReport() {
    this.coreService.getReport()
      .then((result: Report) => this.report = result)
      .catch(error => console.log(error));
  }*/

}
