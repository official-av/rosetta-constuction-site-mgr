import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Labor} from '../../models/labor.model';
import {CoreService} from '../../core.service';

@Component({
  selector: 'app-labor-details',
  templateUrl: './labor-details.component.html',
  styleUrls: ['./labor-details.component.scss']
})
export class LaborDetailsComponent implements OnInit {
  mode = 'add';
  /*TODO: add code for picking mode from routes*/
  /*TODO: add field validations*/
  /*TODO: add redirect on success*/
  labor: Labor = {
    'site_id': 1,
    'id': 6,
    'type': 'Driver',
    'rate': 400,
    'receipt': null,
    'date': new Date('2018-08-05'),
    'number': 1
  };
  laborForm: FormGroup;

  constructor(private coreService: CoreService) {
    if (this.mode === 'add') {
      this.labor = new Labor();
    } else {
      /*fetch labor from route*/
    }
    this.laborForm = new FormGroup({
      type: new FormControl(null),
      rate: new FormControl(null),
      number: new FormControl(null)
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.labor.number = this.laborForm.value.number;
    this.labor.rate = this.laborForm.value.rate;
    this.labor.type = this.laborForm.value.type;
    if (this.mode === 'add') {
      this.coreService.addLabor(this.labor)
        .then(result => console.log(result))
        .catch(error => console.log(error));
    } else {
      /*TODO: code for edit labor*/
      this.coreService.editLabor(this.labor)
        .then(result => console.log(result))
        .catch(error => console.log(error));
    }
  }

}
