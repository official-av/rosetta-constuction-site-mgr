import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CoreService} from '../../core.service';
import {Labor2} from '../../models/newlabor.model';

@Component({
  selector: 'app-labor-item',
  templateUrl: './labor-item.component.html',
  styleUrls: ['./labor-item.component.scss']
})
export class LaborItemComponent implements OnInit {
  @Input() labor: Labor2;

  /*@Output() onDelete = new EventEmitter();*/

  constructor(public coreService: CoreService) {
  }

  ngOnInit() {
  }

  /*deleteLabor(labor: Labor2) {
    if (confirm('Are you sure?')) {
      this.coreService.deleteLabor(labor)
        .then(result => console.log(result))
        .then(() => this.onDelete.emit())
        .catch(error => console.log(error));
    }
  }*/

}
