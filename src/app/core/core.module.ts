import {NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';
import {WelcomeComponent} from './welcome/welcome.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ReportComponent} from './report/report.component';
import {LaborComponent} from './labor/labor.component';
import {LaborDetailsComponent} from './labor/labor-details/labor-details.component';
import {CoreService} from './core.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MachineryComponent} from './machinery/machinery.component';
import {MachineryDetailsComponent} from './machinery/machinery-details/machinery-details.component';
import {MaterialComponent} from './material/material.component';
import {MaterialDetailsComponent} from './material/material-details/material-details.component';
import {ProgressComponent} from './progress/progress.component';
import {TaskDetailsComponent} from './progress/task-details/task-details.component';
import {EditProgressComponent} from './progress/edit-progress/edit-progress.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [WelcomeComponent],
  declarations: [
    WelcomeComponent,
    ReportComponent,
    LaborComponent,
    LaborDetailsComponent,
    MachineryComponent,
    MachineryDetailsComponent,
    MaterialComponent,
    MaterialDetailsComponent,
    ProgressComponent,
    TaskDetailsComponent,
    EditProgressComponent],
  providers: [CoreService],
  entryComponents:[EditProgressComponent]
})

export class CoreModule {
}

