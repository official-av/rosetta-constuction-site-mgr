import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Progress} from '../../models/progress.model';
import {CoreService} from '../../core.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Item} from '../../models/item.model';

@Component({
  selector: 'app-progress-details',
  templateUrl: './progress-details.component.html',
  styleUrls: ['./progress-details.component.scss']
})
export class ProgressDetailsComponent implements OnInit, OnDestroy {
  mode: string;
  schedule_id: number;
  schedule_key: number;
  items: Array<Item>;
  /*TODO: add field validations*/
  subs: Subscription;
  progressForm: FormGroup;
  progress: Progress;

  constructor(private coreService: CoreService,
              private router: Router,
              private route: ActivatedRoute) {
    this.mode = this.route.snapshot.fragment;
    this.items = Array.from(this.coreService.schedules.values());
    if (this.mode === 'add') {
      this.schedule_key = Number(this.route.snapshot.queryParams['schedule_key']);
      this.progress = new Progress();
      // this.progress.schedule_id = this.schedule_id;
    } else {
      this.subs = this.coreService.current_progress.subscribe((progress: Progress) => {
        this.progress = progress;
        const arr = Array.from(this.coreService.schedules.values());
        this.schedule_key = this.progress.schedule_id;
      });
    }
  }

  ngOnInit() {
    this.progressForm = new FormGroup({
      schedule_id: new FormControl({value: this.schedule_key, disabled: this.mode === 'edit'}, Validators.required),
      quantity: new FormControl(this.progress.quantity, Validators.required),
      comments: new FormControl(this.progress.comments, Validators.required)
    });
  }

  cancel() {
    this.router.navigate(['progress']);
  }

  onSubmit() {
    this.progress.quantity = this.progressForm.value.quantity;
    this.progress.comments = this.progressForm.value.comments;
    this.progress.schedule_id = this.progressForm.value.schedule_id;
    if (this.mode === 'add') {
      this.coreService.addProgress(this.progress)
        .then(result => console.log(result))
        .then(() => {
          this.cancel();
        })
        .catch(error => console.log(error));
    } else {
      this.coreService.editProgress(this.progress)
        .then(result => console.log(result))
        .then(() => {
          this.cancel();
        })
        .catch(error => console.log(error));
    }
    console.log(this.progress);
  }

  deleteProgress() {
    if (confirm('Are you sure?')) {
      this.coreService.deleteProgress(this.progress.id)
        .then(result => console.log(result))
        .then(() => this.cancel())
        .catch(error => console.log(error));
    }
  }

  ngOnDestroy(): void {
    if (this.mode === 'edit') {
      this.subs.unsubscribe();
    }
  }
}
