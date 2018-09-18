import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CoreService} from '../../core.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Machinery} from '../../models/machinery.model';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-machinery-details',
  templateUrl: './machinery-details.component.html',
  styleUrls: ['./machinery-details.component.scss']
})
export class MachineryDetailsComponent implements OnInit, OnDestroy {
  mode: string;
  defDate: Date;
  mc: Machinery;
  subs: Subscription;
  mcForm: FormGroup;

  /* TODO: add image component*/

  constructor(private coreService: CoreService,
              private router: Router,
              private route: ActivatedRoute,
              private datepipe: DatePipe) {
    this.defDate = new Date();
    this.mode = this.route.snapshot.fragment;
    if (this.mode === 'add') {
      this.mc = new Machinery();
    } else {
      this.subs = this.coreService.current_machine.subscribe((mc: Machinery) => {
        this.mc = mc;
        console.log(this.mc);
      });
    }
  }

  ngOnInit() {
    console.log('form init');
    this.mcForm = new FormGroup({
      type: new FormControl(this.mc.type, Validators.required),
      cost: new FormControl(this.mc.cost, Validators.required),
      start_date: new FormControl(this.mc.start_date, Validators.required),
      end_date: new FormControl(this.mc.end_date, Validators.required),
      images: new FormControl(this.mc.images),
      comments: new FormControl(this.mc.comments)
    });
  }

  cancel() {
    this.router.navigate(['machinery']);
  }

  test(event: any) {
    console.log(event);
    console.log(this.mcForm.value.start_date);
  }

  onSubmit() {
    const obj = new Machinery();
    console.log(this.mcForm.value.start_date);
    console.log(this.mcForm.value.end_date);
    obj.cost = this.mcForm.value.cost;
    obj.type = this.mcForm.value.type;
    obj.start_date = this.datepipe.transform(this.mcForm.value.start_date, 'yyyy-MM-dd');
    obj.end_date = this.datepipe.transform(this.mcForm.value.end_date, 'yyyy-MM-dd');
    obj.comments = this.mcForm.value.comments;
    obj.images = this.mcForm.value.images;
    console.log(obj);
    if (this.mode === 'add') {
      this.coreService.addMachinery(obj)
        .then(result => console.log(result))
        .then(() => {
          this.cancel();
        })
        .catch(error => console.log(error));
    } else {
      obj.id = this.mc.id;
      obj.site_id = this.mc.site_id;
      this.mc = obj;
      this.coreService.editMachinery(this.mc)
        .then(result => console.log(result))
        .then(() => {
          this.cancel();
        })
        .catch(error => console.log(error));
    }
  }

  ngOnDestroy() {
    if (this.mode === 'edit') {
      this.subs.unsubscribe();
    }
  }

}
