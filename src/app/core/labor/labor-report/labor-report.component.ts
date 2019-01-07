import {Component, Input, OnInit} from '@angular/core';
import {Labor2} from '../../models/newlabor.model';
import {CoreService} from '../../core.service';
import {LaborHistory} from '../../interfaces/laborHistory.interface';

@Component({
  selector: 'app-labor-report',
  templateUrl: './labor-report.component.html',
  styleUrls: ['./labor-report.component.scss']
})
export class LaborReportComponent implements OnInit {
  labors: Array<LaborHistory>;
  @Input() start_date: string;
  @Input() end_date: string;
  displayedColumns: string[] = ['type', 'male', 'female', 'daily', 'workdone', 'total'];

  constructor(private coreService: CoreService) {
  }

  ngOnInit() {
    this.coreService.getLaborReport(this.start_date, this.end_date)
      .then((result: Array<LaborHistory>) => this.labors = result)
      .catch(error => console.log(error));
  }

}
