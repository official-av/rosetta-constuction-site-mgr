import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {MatDialogRef} from '@angular/material';
import {ModalService} from '../modal.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  current_date: string;

  constructor(private datePipe: DatePipe, public modalService: ModalService) {
    this.current_date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    console.log(this.current_date);
  }

  ngOnInit() {
  }

}
