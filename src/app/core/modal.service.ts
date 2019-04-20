import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {HistoryComponent} from './history/history.component';
import {SelectScheduleComponent} from './progress/select-schedule/select-schedule.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(public dialog: MatDialog) {
  }

  openScheduleDialog(mode: string): void {
    const dialogRef = this.dialog.open(SelectScheduleComponent, {
      data: {mode: mode}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openHistoryDialog(): void {
    const dialogRef = this.dialog.open(HistoryComponent, {
      height: '300px',
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
