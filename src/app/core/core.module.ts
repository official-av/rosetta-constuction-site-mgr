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
import {LaborItemComponent} from './labor/labor-item/labor-item.component';
import {MaterialItemComponent} from './material/material-item/material-item.component';
import {MachineryItemComponent} from './machinery/machinery-item/machinery-item.component';
import {AdminComponent} from './admin/admin.component';
import {LaborReportComponent} from './labor/labor-report/labor-report.component';
import {HistoryComponent} from './history/history.component';
import {DieselComponent} from './diesel/diesel.component';
import {DieselDetailsComponent} from './diesel/diesel-details/diesel-details.component';
import {DieselItemComponent} from './diesel/diesel-item/diesel-item.component';
import {DieselReportComponent} from './diesel/diesel-report/diesel-report.component';
import {ProgressReportComponent} from './progress/progress-report/progress-report.component';
import {ProgressItemComponent} from './progress/progress-item/progress-item.component';
import {ProgressDetailsComponent} from './progress/progress-details/progress-details.component';
import {SelectScheduleComponent} from './progress/select-schedule/select-schedule.component';

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
    LaborItemComponent,
    MaterialItemComponent,
    MachineryItemComponent,
    AdminComponent,
    LaborReportComponent,
    HistoryComponent,
    DieselComponent,
    DieselDetailsComponent,
    DieselItemComponent,
    DieselReportComponent,
    ProgressReportComponent,
    ProgressItemComponent,
    ProgressDetailsComponent,
    SelectScheduleComponent],
  providers: [CoreService],
  entryComponents: [SelectScheduleComponent]
})

export class CoreModule {
}

