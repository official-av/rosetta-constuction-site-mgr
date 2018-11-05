import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CoreService} from '../../core.service';

@Component({
  selector: 'app-edit-progress',
  templateUrl: './edit-progress.component.html',
  styleUrls: ['./edit-progress.component.scss']
})
export class EditProgressComponent implements OnInit {
  progress: number;
  id: number;

  constructor(private router: Router, private coreService: CoreService) {
  }

  ngOnInit() {
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
