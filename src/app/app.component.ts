import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Spinkit } from 'ng-http-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public spinkit = Spinkit;
  path:string;
  constructor(private router:Router){
    this.router.events.subscribe((event)=>{
      this.path=this.router.url;
    });
  }
}
