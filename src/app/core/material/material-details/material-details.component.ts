import {Component, OnDestroy, OnInit} from '@angular/core';
import {Material} from '../../models/material.model';
import {Subscription} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CoreService} from '../../core.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-material-details',
  templateUrl: './material-details.component.html',
  styleUrls: ['./material-details.component.scss']
})
export class MaterialDetailsComponent implements OnInit, OnDestroy {
  mode: string;
  mat: Material;
  subs: Subscription;
  matForm: FormGroup;
  // defDate: Date;
  consumed: boolean;

  /* TODO: add image component*/
  constructor(private coreService: CoreService,
              private router: Router,
              private route: ActivatedRoute,
              private datepipe: DatePipe) {
    // this.defDate = new Date();
    this.mode = this.route.snapshot.fragment;
    if (this.mode === 'add') {
      this.mat = new Material();
      this.consumed = this.mat.InventoryType === 'O';
    } else {
      this.subs = this.coreService.current_material.subscribe((mat: Material) => {
        this.mat = mat;
        this.consumed = this.mat.InventoryType === 'O';
      });
    }
  }


  ngOnInit() {
    this.matForm = new FormGroup({
      MaterialType: new FormControl(this.mat.MaterialType, Validators.required),
      MaterialName: new FormControl(this.mat.MaterialName, Validators.required),
      MaterialQuantity: new FormControl(this.mat.MaterialQuantity, Validators.required),
      MaterialUnits: new FormControl(this.mat.MaterialUnits, Validators.required),
      Comments: new FormControl(this.mat.Comments, Validators.required)
    });
  }

  cancel() {
    this.router.navigate(['materials']);
  }

  onSubmit() {
    this.mat.MaterialType = this.matForm.value.MaterialType;
    this.mat.MaterialName = this.matForm.value.MaterialName;
    this.mat.MaterialQuantity = this.matForm.value.MaterialQuantity;
    this.mat.MaterialUnits = this.matForm.value.MaterialUnits;
    /*this.mat.date = this.datepipe.transform(this.matForm.value.start_date, 'yyyy-MM-dd');*/
    this.mat.InventoryType = this.consumed ? 'O' : 'I';
    this.mat.Comments = this.matForm.value.Comments;
    if (this.mode === 'add') {
      this.coreService.addMaterials(this.mat)
        .then(result => console.log(result))
        .then(() => {
          this.cancel();
        })
        .catch(error => console.log(error));
    } else {
      this.coreService.editMaterials(this.mat)
        .then(result => console.log(result))
        .then(() => {
          this.cancel();
        })
        .catch(error => console.log(error));
    }
  }

  toggleConsumed() {
    this.consumed = !this.consumed;
  }

  deleteMaterial() {
    if (confirm('Are you sure?')) {
      this.coreService.deleteMaterial(this.mat)
        .then(result => console.log(result))
        .then(() => this.cancel())
        .catch(error => console.log(error));
    }
  }

  ngOnDestroy() {
    if (this.mode === 'edit') {
      this.subs.unsubscribe();
    }
  }
}
