import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CoreService} from '../../core.service';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-edit-progress',
  templateUrl: './edit-progress.component.html',
  styleUrls: ['./edit-progress.component.scss']
})
export class EditProgressComponent implements OnInit {
  progress: number;
  id: number;

  constructor(private router: Router,
              private coreService: CoreService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.progress = this.data.progress;
    this.id = this.data.id;
  }

  cancel() {
    this.router.navigate(['progress']);
  }

  submit() {
    this.coreService.editProgress(this.id, this.progress)
      .then(result => console.log(result))
      .catch(error => console.log(error));
  }

}
