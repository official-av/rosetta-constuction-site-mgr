import {Component, Input, OnInit} from '@angular/core';
import {CoreService} from '../../core.service';
import {MaterialHistory} from '../../interfaces/materialHistory.interface';

@Component({
  selector: 'app-material-report',
  templateUrl: './material-report.component.html',
  styleUrls: ['./material-report.component.scss']
})
export class MaterialReportComponent implements OnInit {
  material: Array<MaterialHistory> = [];
  @Input() start_date: string;
  @Input() end_date: string;
  displayedColumns: string[] = ['name', 'type', 'inventory', 'quantity', 'transaction_date', 'comments'];

  constructor(public coreService: CoreService) {
  }

  ngOnInit() {
    this.coreService.getMaterialReport(this.start_date, this.end_date)
      .then((result: Array<MaterialHistory>) => this.material = result)
      .catch(error => console.log(error));
  }

}
