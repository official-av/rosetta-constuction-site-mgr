import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CoreService} from '../../core.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Labor2} from '../../models/newlabor.model';

@Component({
  selector: 'app-labor-details',
  templateUrl: './labor-details.component.html',
  styleUrls: ['./labor-details.component.scss']
})
export class LaborDetailsComponent implements OnInit, OnDestroy {
  mode: string;
  category = false;
  /*TODO: add field validations*/
  subs: Subscription;
  laborForm: FormGroup;
  labor: Labor2;

  constructor(private coreService: CoreService,
              private router: Router,
              private route: ActivatedRoute) {
    this.mode = this.route.snapshot.fragment;
    if (this.mode === 'add') {
      this.labor = new Labor2();
    } else {
      this.subs = this.coreService.current_labor.subscribe((labor: Labor2) => {
        this.labor = labor;
        this.category = this.labor.daily === 1;
        console.log(this.labor);
      });
    }
  }

  ngOnInit() {
    this.laborForm = new FormGroup({
      category: new FormControl(this.category, Validators.required),
      type: new FormControl(this.labor.type, Validators.required),
      m_rate: new FormControl(this.labor.male_rate, Validators.required),
      m_count: new FormControl(this.labor.male_count, Validators.required),
      f_rate: new FormControl(this.labor.female_rate, Validators.required),
      f_count: new FormControl(this.labor.female_count, Validators.required),
      work_done: new FormControl(this.labor.work_done, Validators.required),
      receipt: new FormControl(this.labor.receipt, Validators.required)
    });
  }

  cancel() {
    this.router.navigate(['labor']);
  }

  onSubmit() {
    if (this.mode === 'add') {
      this.labor.type = this.laborForm.value.type;
      this.labor.daily = (<boolean>this.laborForm.value.category) ? 1 : 0;
      this.labor.male_rate = this.laborForm.value.m_rate;
      this.labor.female_rate = this.laborForm.value.f_rate;
      this.labor.male_count = this.laborForm.value.m_count;
      this.labor.female_count = this.laborForm.value.f_count;
      this.labor.work_done = this.laborForm.value.work_done;
      console.log(this.labor);
      this.coreService.addLabor(this.labor)
        .then(result => console.log(result))
        .then(() => {
          this.cancel();
        })
        .catch(error => console.log(error));
    } else {
      this.labor.type = this.laborForm.value.type;
      this.labor.daily = (<boolean>this.laborForm.value.category) ? 1 : 0;
      this.labor.male_rate = this.laborForm.value.m_rate;
      this.labor.female_rate = this.laborForm.value.f_rate;
      this.labor.male_count = this.laborForm.value.m_count;
      this.labor.female_count = this.laborForm.value.f_count;
      this.labor.work_done = this.laborForm.value.work_done;
      console.log('yes');
      this.coreService.editLabor(this.labor)
        .then(result => console.log(result))
        .then(() => {
          this.cancel();
        })
        .catch(error => console.log(error));
    }
  }

  toggleCategory() {
    this.category = !this.category;
  }

  deleteLabor() {
    if (confirm('Are you sure?')) {
      this.coreService.deleteLabor(this.labor)
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
