import {Component, Inject, OnInit} from '@angular/core';
import {CoreService} from '../../core.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {Item} from '../../models/item.model';

@Component({
  selector: 'app-select-schedule',
  templateUrl: './select-schedule.component.html',
  styleUrls: ['./select-schedule.component.scss']
})
export class SelectScheduleComponent implements OnInit {
  // mode: string;
  keys: Map<number, string>;
  items: Array<string>;
  schedule_key: number;

  constructor(private coreService: CoreService,
              private router: Router,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private dialog: MatDialog) {
    this.keys = new Map<number, string>();
    // Array.from(this.coreService.schedules.keys());
    this.coreService.schedules.forEach((m: Item, key: number) => {
      this.keys.set(m.id, m.item);
    });
    this.items = Array.from(this.keys.values());
  }

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigate(['/progressdetails'],
      {
        queryParams: {schedule_key: this.schedule_key},
        fragment: 'add'
      });
    this.dialog.closeAll();
  }
}
