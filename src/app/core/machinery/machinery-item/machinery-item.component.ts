import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Machinery} from '../../models/machinery.model';
import {CoreService} from '../../core.service';

@Component({
  selector: 'app-machinery-item',
  templateUrl: './machinery-item.component.html',
  styleUrls: ['./machinery-item.component.scss']
})
export class MachineryItemComponent implements OnInit {
  @Input() machine: Machinery;
  @Output() onDelete = new EventEmitter();

  constructor(public coreService: CoreService) {
  }

  ngOnInit() {
  }

  deleteMachinery(mc: Machinery) {
    if (confirm('Are you sure?')) {
      this.coreService.deleteMachinery(mc)
        .then(result => console.log(result))
        .then(() => this.onDelete.emit())
        .catch(error => console.log(error));
    }
  }

}
