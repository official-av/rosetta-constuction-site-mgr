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

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'labor', component: LaborComponent},
  {path: 'labordetails', component: LaborDetailsComponent},
  {path: 'machinery', component: MachineryComponent},
  {path: 'machinerydetails', component: MachineryDetailsComponent},
  {path: 'materials', component: MaterialComponent},
  {path: 'materialdetails', component: MaterialDetailsComponent},
  {path: 'progress', component: ProgressComponent},
  // {path: 'scheduledetails', component: ScheduleDetailsComponent},
  {path: 'report', component: ReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutesModule {
}
