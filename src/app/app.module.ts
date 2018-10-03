import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared.module';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { RoutesModule } from './routes.module';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    /*custom modules*/
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    RoutesModule,
    NgHttpLoaderModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
