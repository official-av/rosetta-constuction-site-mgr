import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Labor} from '../../models/labor.model';
import {CoreService} from '../../core.service';

@Component({
  selector: 'app-labor-item',
  templateUrl: './labor-item.component.html',
  styleUrls: ['./labor-item.component.scss']
})
export class LaborItemComponent implements OnInit {
  @Input() labor: Labor;
  @Output() onDelete = new EventEmitter();

  constructor(public coreService: CoreService) {
  }

  ngOnInit() {
  }

  deleteLabor(labor: Labor) {
    if (confirm('Are you sure?')) {
      this.coreService.deleteLabor(labor)
        .then(result => console.log(result))
        .then(() => this.onDelete.emit())
        .catch(error => console.log(error));
    }
  }

}
