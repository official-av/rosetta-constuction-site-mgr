import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Diesel} from '../../models/diesel.model';
import {CoreService} from '../../core.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-diesel-details',
  templateUrl: './diesel-details.component.html',
  styleUrls: ['./diesel-details.component.scss']
})
export class DieselDetailsComponent implements OnInit, OnDestroy {
  mode: string;
  /*TODO: add field validations*/
  subs: Subscription;
  dieselForm: FormGroup;
  diesel: Diesel;

  constructor(private coreService: CoreService,
              private router: Router,
              private route: ActivatedRoute) {
    this.mode = this.route.snapshot.fragment;
    if (this.mode === 'add') {
      this.diesel = new Diesel();
    } else {
      this.subs = this.coreService.current_diesel
        .subscribe((diesel: Diesel) => {
          this.diesel = diesel;
          console.log(this.diesel);
        });
    }
  }

  ngOnInit() {
    this.dieselForm = new FormGroup({
      vehicle_no: new FormControl(this.diesel.vehicle_no, Validators.required),
      litres: new FormControl(this.diesel.litres, [Validators.required, Validators.min(0)]),
      comment: new FormControl(this.diesel.comment)
    });
  }

  onSubmit() {
    this.diesel.vehicle_no = this.dieselForm.value.vehicle_no;
    this.diesel.litres = this.dieselForm.value.litres;
    this.diesel.comment = this.dieselForm.value.comment;
    console.log(this.diesel);
    if (this.mode === 'add') {
      this.coreService.addDiesel(this.diesel)
        .then(result => console.log(result))
        .then(() => {
          this.cancel();
        })
        .catch(error => console.log(error));
    } else {
      this.coreService.editDiesel(this.diesel)
        .then(result => console.log(result))
        .then(() => {
          this.cancel();
        })
        .catch(error => console.log(error));
    }
  }

  deleteDiesel() {
    if (confirm('Are you sure?')) {
      this.coreService.deleteDiesel(this.diesel)
        .then(result => console.log(result))
        .then(() => this.cancel())
        .catch(error => console.log(error));
    }
  }

  cancel() {
    this.router.navigate(['diesel']);
  }

  ngOnDestroy(): void {
    if (this.mode === 'edit') {
      this.subs.unsubscribe();
    }
  }

}
