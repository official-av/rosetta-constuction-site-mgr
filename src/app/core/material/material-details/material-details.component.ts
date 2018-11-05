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
  defDate: Date;
  consumed: boolean;

  /* TODO: add image component*/
  constructor(private coreService: CoreService,
              private router: Router,
              private route: ActivatedRoute,
              private datepipe: DatePipe) {
    this.defDate = new Date();
    this.mode = this.route.snapshot.fragment;
    if (this.mode === 'add') {
      this.mat = new Material();
    } else {
      this.subs = this.coreService.current_material.subscribe((mat: Material) => {
        this.mat = mat;
      });
    }
  }


  ngOnInit() {
    this.matForm = new FormGroup({
      type: new FormControl(this.mat.type, Validators.required),
      cost: new FormControl(this.mat.cost, Validators.required),
      date: new FormControl(this.mat.date, Validators.required),
      quantity: new FormControl(this.mat.quantity, Validators.required),
      images: new FormControl(this.mat.images)
    });
    this.consumed = this.mat.in_vs_out === 1;
  }

  cancel() {
    this.router.navigate(['materials']);
  }

  onSubmit() {
    this.mat.cost = this.matForm.value.cost;
    this.mat.type = this.matForm.value.type;
    this.mat.quantity = this.matForm.value.quantity;
    this.mat.in_vs_out = this.matForm.value.in_vs_out;
    this.mat.date = this.datepipe.transform(this.matForm.value.start_date, 'yyyy-MM-dd');
    this.mat.images = this.matForm.value.images;
    this.mat.in_vs_out = this.consumed ? 1 : -1;
    console.log(this.mat);
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
    console.log(this.consumed);
  }

  ngOnDestroy() {
    if (this.mode === 'edit') {
      this.subs.unsubscribe();
    }
  }
}
