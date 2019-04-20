import {Component, OnInit} from '@angular/core';
import {CoreService} from '../core.service';
import {ModalService} from '../modal.service';
import {Progress} from '../models/progress.model';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  progress: Array<Progress>;

  constructor(private coreService: CoreService, public modalService: ModalService) {
  }

  ngOnInit() {
    this.coreService.fetchSchedules()
      .then(result => this.coreService.schedules = result)
      .then(() => {
        this.getProgress();
      });
  }

  getProgress() {
    this.coreService.getProgress()
      .then((result: Array<Progress>) => this.progress = result)
      .then(() => {
        console.log(this.progress);
      });
  }

}
