import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './core/welcome/welcome.component';
import {DashboardComponent} from './core/dashboard/dashboard.component';
import {AssetComponent} from './core/asset/asset.component';
import {ReportComponent} from './core/report/report.component';
import {LaborComponent} from './core/labor/labor.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'asset', component: AssetComponent},
  {path: 'report', component: ReportComponent},
  {path: 'labor', component: LaborComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutesModule {
}
