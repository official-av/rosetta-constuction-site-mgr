import {Component, Input, OnInit} from '@angular/core';
import {DieselHistory} from '../../interfaces/dieselHistory.interface';
import {CoreService} from '../../core.service';

@Component({
  selector: 'app-diesel-report',
  templateUrl: './diesel-report.component.html',
  styleUrls: ['./diesel-report.component.scss']
})
export class DieselReportComponent implements OnInit {
  diesel: Array<DieselHistory> = [];
  @Input() start_date: string;
  @Input() end_date: string;
  displayedColumns: string[] = ['vehicle_no', 'litres', 'comments'];

  constructor(private coreService: CoreService) {
  }

  ngOnInit() {
    this.coreService.getDieselReport(this.start_date, this.end_date)
      .then((result: Array<DieselHistory>) => this.diesel = result)
      .catch(error => console.log(error));
  }

}
