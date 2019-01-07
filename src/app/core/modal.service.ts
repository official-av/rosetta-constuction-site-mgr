import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {EditProgressComponent} from './progress/edit-progress/edit-progress.component';
import {HistoryComponent} from './history/history.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(public dialog: MatDialog) {
  }

  openDialog(obj: { id: number, progress: number }): void {
    const dialogRef = this.dialog.open(EditProgressComponent, {
      data: {id: obj.id, progress: obj.progress}
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
