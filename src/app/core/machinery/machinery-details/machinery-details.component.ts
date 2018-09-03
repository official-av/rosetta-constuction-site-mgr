import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CoreService} from '../../core.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Machinery} from '../../models/machinery.model';

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

  /* TODO: add dates formatting*/
  /* TODO: add image component*/

  /* TODO: add edit mode*/

  constructor(private coreService: CoreService,
              private router: Router,
              private route: ActivatedRoute) {
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

  onSubmit() {
    if (this.mode === 'add') {
      this.mc.cost = this.mcForm.value.cost;
      this.mc.type = this.mcForm.value.type;
      console.log(this.mcForm.value.start_date);
      console.log(this.mcForm.value.end_date);
      this.mc.comments = this.mcForm.value.comments;
      this.mc.images = this.mcForm.value.images;
      this.coreService.addMachinery(this.mc)
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
