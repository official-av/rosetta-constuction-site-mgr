import {NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';
import {WelcomeComponent} from './welcome/welcome.component';

@NgModule({
  imports: [SharedModule],
  exports: [WelcomeComponent],
  declarations: [WelcomeComponent]
})

export class CoreModule {
}

