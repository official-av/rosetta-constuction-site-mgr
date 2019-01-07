import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  start_date: string;
  end_date: string;

  constructor(private dialog: MatDialog, private router: Router, private datePipe: DatePipe) {
  }

  ngOnInit() {
  }

  onSubmit() {
    const sdate = this.datePipe.transform(this.start_date, 'yyyy-MM-dd');
    const edate = this.datePipe.transform(this.end_date, 'yyyy-MM-dd');
    this.dialog.closeAll();
    this.router.navigate(['/report'], {queryParams: {sdate: sdate, edate: edate}});
  }
}
