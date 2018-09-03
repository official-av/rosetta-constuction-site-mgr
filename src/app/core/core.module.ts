import {NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';
import {WelcomeComponent} from './welcome/welcome.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AssetComponent} from './asset/asset.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ReportComponent} from './report/report.component';
import {ArrayFilterPipe} from './pipes/array-filter.pipe';
import {AssetDetailsComponent} from './asset/asset-details/asset-details.component';
import {LaborComponent} from './labor/labor.component';
import {LaborDetailsComponent} from './labor/labor-details/labor-details.component';
import {CoreService} from './core.service';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {MachineryComponent} from './machinery/machinery.component';
import {MachineryDetailsComponent} from './machinery/machinery-details/machinery-details.component';
import {MaterialComponent} from './material/material.component';
import {MaterialDetailsComponent} from './material/material-details/material-details.component';

@NgModule({
  imports: [SharedModule, RouterModule, CommonModule, HttpClientModule, ReactiveFormsModule],
  exports: [WelcomeComponent],
  declarations: [
    WelcomeComponent,
    DashboardComponent,
    AssetComponent,
    ReportComponent,
    ArrayFilterPipe,
    AssetDetailsComponent,
    LaborComponent,
    LaborDetailsComponent,
    MachineryComponent,
    MachineryDetailsComponent,
    MaterialComponent,
    MaterialDetailsComponent],
  providers: [CoreService]
})

export class CoreModule {
}

