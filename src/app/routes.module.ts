import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './core/welcome/welcome.component';
import {ReportComponent} from './core/report/report.component';
import {LaborComponent} from './core/labor/labor.component';
import {LaborDetailsComponent} from './core/labor/labor-details/labor-details.component';
import {MachineryComponent} from './core/machinery/machinery.component';
import {MachineryDetailsComponent} from './core/machinery/machinery-details/machinery-details.component';
import {MaterialComponent} from './core/material/material.component';
import {MaterialDetailsComponent} from './core/material/material-details/material-details.component';
import {ProgressComponent} from './core/progress/progress.component';
import {AdminComponent} from './core/admin/admin.component';
import {HistoryComponent} from './core/history/history.component';
import {DieselComponent} from './core/diesel/diesel.component';
import {DieselDetailsComponent} from './core/diesel/diesel-details/diesel-details.component';
import {ProgressDetailsComponent} from './core/progress/progress-details/progress-details.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'labor', component: LaborComponent},
  {path: 'labordetails', component: LaborDetailsComponent},
  {path: 'diesel', component: DieselComponent},
  {path: 'dieseldetails', component: DieselDetailsComponent},
  {path: 'machinery', component: MachineryComponent},
  {path: 'machinerydetails', component: MachineryDetailsComponent},
  {path: 'materials', component: MaterialComponent},
  {path: 'materialdetails', component: MaterialDetailsComponent},
  {path: 'progress', component: ProgressComponent},
  {path: 'progressdetails', component: ProgressDetailsComponent},
  // {path: 'scheduledetails', component: ScheduleDetailsComponent},
  {path: 'report', component: ReportComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'report/:sdate/:edate', component: ReportComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutesModule {
}
