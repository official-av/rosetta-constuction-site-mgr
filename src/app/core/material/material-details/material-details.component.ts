import {Component, OnDestroy, OnInit} from '@angular/core';
import {Material} from '../../models/material.model';
import {Subscription} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CoreService} from '../../core.service';
import {ActivatedRoute, Router} from '@angular/router';

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

  /* TODO: add dates formatting*/
  /* TODO: add image component*/

  /* TODO: add edit mode*/
  constructor(private coreService: CoreService,
              private router: Router,
              private route: ActivatedRoute) {
    this.defDate = new Date();
    this.mode = this.route.snapshot.fragment;
    if (this.mode === 'add') {
      this.mat = new Material();
    } else {
      this.subs = this.coreService.current_material.subscribe((mat: Material) => {
        this.mat = mat;
        console.log(this.mat);
      });
    }
  }


  ngOnInit() {
    console.log('form init');
    this.matForm = new FormGroup({
      type: new FormControl(this.mat.type, Validators.required),
      cost: new FormControl(this.mat.cost, Validators.required),
      date: new FormControl(this.mat.date, Validators.required),
      quantity: new FormControl(this.mat.quantity, Validators.required),
      consumed: new FormControl(this.mat.consumed, Validators.required),
      images: new FormControl(this.mat.images)
    });
  }

  cancel() {
    this.router.navigate(['materials']);
  }

  onSubmit() {
    if (this.mode === 'add') {
      this.mat.cost = this.matForm.value.cost;
      this.mat.type = this.matForm.value.type;
      this.mat.quantity = this.matForm.value.quantity;
      this.mat.consumed = this.matForm.value.consumed;
      this.mat.date = this.matForm.value.date;
      this.mat.images = this.matForm.value.images;
      this.coreService.addMachinery(this.mat)
        .then(result => console.log(result))
        .then(() => {
          this.cancel();
        })
        .catch(error => console.log(error));
    }
    /*else {
         if ((this.labor.number !== this.laborForm.value.number)
           || (this.labor.rate !== this.laborForm.value.rate)
           || (this.labor.type !== this.laborForm.value.type)) {
           this.labor.number = this.laborForm.value.number;
           this.labor.rate = this.laborForm.value.rate;
           this.labor.type = this.laborForm.value.type;
           console.log('yes');
           this.coreService.editLabor(this.labor)
             .then(result => console.log(result))
             .then(() => {
               this.cancel();
             })
             .catch(error => console.log(error));
         } else {
           console.log('cancel');
           this.cancel();
         }
       }*/
  }

  ngOnDestroy() {
    if (this.mode === 'edit') {
      this.subs.unsubscribe();
    }
  }
}
