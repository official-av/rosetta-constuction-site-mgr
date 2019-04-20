import {Component, Input, OnInit} from '@angular/core';
import {CoreService} from '../../core.service';
import {Progress} from '../../models/progress.model';
import {ModalService} from '../../modal.service';
import {Item} from '../../models/item.model';

@Component({
  selector: 'app-progress-item',
  templateUrl: './progress-item.component.html',
  styleUrls: ['./progress-item.component.scss']
})
export class ProgressItemComponent implements OnInit {
  @Input() progress: Progress;
  associatedItem: Item;

  constructor(public coreService: CoreService, public modalService: ModalService) {
  }

  ngOnInit() {
    this.associatedItem = this.coreService.schedules.get(this.progress.schedule_id);
  }

}
