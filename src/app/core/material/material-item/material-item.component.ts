import {Component, Input, OnInit} from '@angular/core';
import {Material} from '../../models/material.model';
import {CoreService} from '../../core.service';

@Component({
  selector: 'app-material-item',
  templateUrl: './material-item.component.html',
  styleUrls: ['./material-item.component.scss']
})
export class MaterialItemComponent implements OnInit {
  @Input() material: Material;

  constructor(public coreService: CoreService) {
  }

  ngOnInit() {
  }

}
