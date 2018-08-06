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

@NgModule({
  imports: [SharedModule, RouterModule, CommonModule, HttpClientModule],
  exports: [WelcomeComponent],
  declarations: [
    WelcomeComponent,
    DashboardComponent,
    AssetComponent,
    ReportComponent,
    ArrayFilterPipe,
    AssetDetailsComponent,
    LaborComponent,
    LaborDetailsComponent],
  providers: [CoreService]
})

export class CoreModule {
}

