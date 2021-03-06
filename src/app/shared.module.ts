import {NgModule} from '@angular/core';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NavbarComponent} from './shared-ui/navbar/navbar.component';
import {SidenavComponent} from './shared-ui/sidenav/sidenav.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    MaterialModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    NavbarComponent,
    SidenavComponent
  ],
  declarations: [NavbarComponent, SidenavComponent]
})

export class SharedModule {
}
