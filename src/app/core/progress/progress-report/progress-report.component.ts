import {Component, Input, OnInit} from '@angular/core';
import {ProgressHistory} from '../../interfaces/progressHistory.interface';
import {CoreService} from '../../core.service';

@Component({
  selector: 'app-progress-report',
  templateUrl: './progress-report.component.html',
  styleUrls: ['./progress-report.component.scss']
})
export class ProgressReportComponent implements OnInit {
  progress: Array<ProgressHistory> = [];
  @Input() start_date: string;
  @Input() end_date: string;
  displayedColumns: string[] = ['item_id', 'item', 'task', 'quantity', 'expected_progress', 'actual_progress', 'comments'];

  constructor(public coreService: CoreService) {
  }

  ngOnInit() {
    this.coreService.fetchSchedules()
      .then(result => this.coreService.schedules = result)
      .then(() => {
        this.coreService.getProgressReport(this.start_date, this.end_date)
          .then((result: Array<ProgressHistory>) => this.progress = result)
          .catch(error => console.log(error));
      });
  }
}
