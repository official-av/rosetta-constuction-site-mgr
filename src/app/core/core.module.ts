import {NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';
import {WelcomeComponent} from './welcome/welcome.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AssetComponent} from './asset/asset.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ReportComponent} from './report/report.component';
import {ArrayFilterPipe} from './pipes/array-filter.pipe';
import { AssetItemComponent } from './asset/asset-item/asset-item.component';
import { AssetDetailsComponent } from './asset/asset-details/asset-details.component';

@NgModule({
  imports: [SharedModule, RouterModule, CommonModule],
  exports: [WelcomeComponent],
  declarations: [WelcomeComponent, DashboardComponent, AssetComponent, ReportComponent, ArrayFilterPipe, AssetItemComponent, AssetDetailsComponent]
})

export class CoreModule {
}

