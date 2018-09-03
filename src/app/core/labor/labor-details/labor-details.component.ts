import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Labor} from '../../models/labor.model';
import {CoreService} from '../../core.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-labor-details',
  templateUrl: './labor-details.component.html',
  styleUrls: ['./labor-details.component.scss']
})
export class LaborDetailsComponent implements OnInit, OnDestroy {
  mode: string;
  /*TODO: add field validations*/
  subs: Subscription;
  laborForm: FormGroup;
  labor: Labor;

  constructor(private coreService: CoreService,
              private router: Router,
              private route: ActivatedRoute) {
    this.mode = this.route.snapshot.fragment;
    if (this.mode === 'add') {
      this.labor = new Labor();
    } else {
      this.subs = this.coreService.current_labor.subscribe((labor: Labor) => {
        this.labor = labor;
        console.log(this.labor);
      });
    }
  }

  ngOnInit() {
    console.log('form init');
    this.laborForm = new FormGroup({
      type: new FormControl(this.labor.type, Validators.required),
      rate: new FormControl(this.labor.rate, Validators.required),
      number: new FormControl(this.labor.number, Validators.required)
    });
  }

  cancel() {
    this.router.navigate(['labor']);
  }

  onSubmit() {
    if (this.mode === 'add') {
      this.labor.number = this.laborForm.value.number;
      this.labor.rate = this.laborForm.value.rate;
      this.labor.type = this.laborForm.value.type;
      this.coreService.addLabor(this.labor)
        .then(result => console.log(result))
        .then(() => {
          this.cancel();
        })
        .catch(error => console.log(error));
    } else {
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
    }
  }

  ngOnDestroy() {
    if (this.mode === 'edit') {
      this.subs.unsubscribe();
    }
  }

}
