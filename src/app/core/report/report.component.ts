import {Component, OnInit} from '@angular/core';
import {CoreService} from '../core.service';
import {Report} from '../models/report.model';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  report: Report;

  ngOnInit() {
  }

  constructor(private coreService: CoreService) {
    this.fetchReport();
  }

  fetchReport() {
    this.coreService.getReport()
      .then((result: Report) => this.report = result)
      .catch(error => console.log(error));
  }

}
