import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared.module';
import {CoreModule} from './core/core.module';
import {RouterModule} from '@angular/router';
import {RoutesModule} from './routes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    /*custom modules*/
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
