import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Material} from '../../models/material.model';
import {CoreService} from '../../core.service';

@Component({
  selector: 'app-material-item',
  templateUrl: './material-item.component.html',
  styleUrls: ['./material-item.component.scss']
})
export class MaterialItemComponent implements OnInit {
  @Input() material: Material;
  @Output() onDelete = new EventEmitter();

  constructor(public coreService: CoreService) {
  }

  ngOnInit() {
  }

  deleteMaterial(mat: Material) {
    if (confirm('Are you sure?')) {
      this.coreService.deleteMaterial(mat)
        .then(result => console.log(result))
        .then(() => this.onDelete.emit())
        .catch(error => console.log(error));
    }
  }

}
