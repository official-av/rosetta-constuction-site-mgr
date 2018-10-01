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
      .catch(error => console.log(error));
  }

  deleteMaterial(mat: Material) {
    if (confirm('Are you sure?')) {
      this.coreService.deleteMaterial(mat)
        .then(result => this.getMaterials())
        .catch(error => console.log(error));
    }
  }

}
