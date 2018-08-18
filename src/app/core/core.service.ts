import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Labor} from './models/labor.model';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class CoreService {
  site_id = 1;
  current_labor = new BehaviorSubject(new Labor());
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) {
  }

  /*Labor calls*/
  fetchLabor(): Promise<Array<Labor>> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.api_url + '/get-labor?site_id=' + this.site_id
        , this.httpOptions)
        .subscribe((result: any) => {
          if (result.status_code === 1) {
            resolve(result.labor_info);
          }
        }, error => reject(error));
    });
  }

  addLabor(labor: Labor) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.api_url
        + '/insert-labor?site_id=' + this.site_id
        + '&labor_type=' + labor.type
        + '&number=' + labor.number
        + '&wage_per_person=' + labor.rate
        , this.httpOptions)
        .subscribe((result: any) => {
          if (result.status_code === 1) {
            resolve('success');
          }
        }, error => reject(error));
    });
  }

  editLabor(labor: Labor) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.api_url
        + '/edit-labor?site_id=' + this.site_id
        + '&id=' + labor.id
        + '&labor_type=' + labor.type
        + '&wage_per_person=' + labor.rate
        + '&number=' + labor.number
        , this.httpOptions)
        .subscribe((result: any) => {
          if (result.status_code === 1) {
            resolve('success');
          }
        }, error => reject(error));
    });
  }

  deleteLabor(labor: Labor) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.api_url + '/delete-labor'
        + '?id=' + labor.id
        + '&site_id=' + this.site_id
        , this.httpOptions)
        .subscribe((result: any) => {
          if (result.status_code === 1) {
            resolve('success');
          }
        }, error => reject(error));
    });
  }
}
