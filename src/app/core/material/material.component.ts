import {Component, OnInit} from '@angular/core';
import {CoreService} from '../core.service';
import {Material} from '../models/material.model';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {
  materials: Array<Material>;

  constructor(public coreService: CoreService) {
  }

  ngOnInit() {
    this.getMaterials();
  }

  getMaterials() {
    this.coreService.fetchMaterials()
      .then((result: Array<Material>) => this.materials = result)
      .then(() => console.log(this.materials))
      .catch(error => console.log(error));
  }

}
