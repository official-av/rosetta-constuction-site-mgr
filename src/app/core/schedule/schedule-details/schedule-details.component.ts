import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CoreService} from '../../core.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Schedule} from '../../models/schedule.model';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.scss']
})
export class ScheduleDetailsComponent implements OnInit, OnDestroy {
  mode: string;
  defDate: Date;
  sch: Schedule;
  subs: Subscription;
  schForm: FormGroup;

  /* TODO: add dates formatting*/
  /* TODO: add image component*/

  /* TODO: add edit mode*/

  constructor(private coreService: CoreService,
              private router: Router,
              private route: ActivatedRoute) {
    this.defDate = new Date();
    this.mode = this.route.snapshot.fragment;
    if (this.mode === 'add') {
      this.sch = new Schedule();
    } else {
      this.subs = this.coreService.current_schedule
        .subscribe((sch: Schedule) => {
          this.sch = sch;
          console.log(this.sch);
        });
    }
  }

  ngOnInit() {
    console.log('form init');
    this.schForm = new FormGroup({
      task: new FormControl(this.sch.task, Validators.required),
      percentage_completed: new FormControl(this.sch.percentage_completed, Validators.required),
      units_completed: new FormControl(this.sch.units_completed, Validators.required),
      date: new FormControl(this.sch.date, Validators.required),
      estimated_completion_date: new FormControl(this.sch.estimated_completion_date, Validators.required),
      images: new FormControl(this.sch.images),
      comments: new FormControl(this.sch.comments)
    });
  }

  cancel() {
    this.router.navigate(['schedules']);
  }

  onSubmit() {
    if (this.mode === 'add') {
      this.sch.task = this.schForm.value.task;
      this.sch.percentage_completed = this.schForm.value.percentage_completed;
      this.sch.units_completed = this.schForm.value.units_completed;
      console.log(this.schForm.value.date);
      console.log(this.schForm.value.estimated_completion_date);
      this.sch.comments = this.schForm.value.comments;
      this.sch.images = this.schForm.value.images;
      this.coreService.addSchedules(this.sch)
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
