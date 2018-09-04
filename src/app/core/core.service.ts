import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Labor} from './models/labor.model';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {Machinery} from './models/machinery.model';
import {Material} from './models/material.model';
import {Schedule} from './models/schedule.model';

@Injectable()
export class CoreService {
  site_id = 1;
  current_labor = new BehaviorSubject(new Labor());
  current_machine = new BehaviorSubject(new Machinery());
  current_material = new BehaviorSubject(new Material());
  current_schedule = new BehaviorSubject(new Schedule());
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

  /*Machinery Calls*/
  fetchMachinery(): Promise<Array<Machinery>> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.api_url + '/get-machinery?site_id=' + this.site_id
        , this.httpOptions)
        .subscribe((result: any) => {
          if (result.status_code === 1) {
            resolve(result.machinery_info);
          }
        }, error => reject(error));
    });
  }

  addMachinery(mc: Machinery) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.api_url
        + '/insert-machinery?site_id=' + this.site_id
        + '&cost=' + mc.cost
        + '&start_date=' + mc.start_date
        + '&end_date=' + mc.end_date
        + '&comments=' + mc.comments
        + '&images=' + mc.images
        + '&type=' + mc.type
        , this.httpOptions)
        .subscribe((result: any) => {
          if (result.status_code === 1) {
            resolve('success');
          }
        }, error => reject(error));
    });
  }

  editMachinery(mc: Machinery) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.api_url
        + '/edit-machinery?site_id=' + this.site_id
        + '&id=' + mc.id
        + '&cost=' + mc.cost
        + '&start_date=' + mc.start_date
        + '&end_date=' + mc.end_date
        + '&comments=' + mc.comments
        + '&images=' + mc.images
        + '&type=' + mc.type
        , this.httpOptions)
        .subscribe((result: any) => {
          if (result.status_code === 1) {
            resolve('success');
          }
        }, error => reject(error));
    });
  }

  deleteMachinery(mc: Machinery) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.api_url + '/delete-machinery'
        + '?id=' + mc.id
        + '&site_id=' + this.site_id
        , this.httpOptions)
        .subscribe((result: any) => {
          if (result.status_code === 1) {
            resolve('success');
          }
        }, error => reject(error));
    });
  }

  /*Schedule Calls*/
  fetchSchedules(): Promise<Array<Schedule>> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.api_url + '/get-schedule?site_id=' + this.site_id
        , this.httpOptions)
        .subscribe((result: any) => {
          if (result.status_code === 1) {
            resolve(result.schedule_info);
          }
        }, error => reject(error));
    });
  }

  addSchedules(sch: Schedule) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.api_url
        + '/insert-schedule?site_id=' + this.site_id
        + '&percentage_complted=' + sch.percentage_completed
        + '&units_completed=' + sch.units_completed
        + '&date=' + sch.date
        + '&estimated_completion_date=' + sch.estimated_completion_date
        + '&images=' + sch.images
        + '&task=' + sch.task
        + '&comments=' + sch.comments
        , this.httpOptions)
        .subscribe((result: any) => {
          if (result.status_code === 1) {
            resolve('success');
          }
        }, error => reject(error));
    });
  }

  editSchedule(sch: Schedule) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.api_url
        + '/edit-schedule?site_id=' + this.site_id
        + '&percentage_complted=' + sch.percentage_completed
        + '&units_completed=' + sch.units_completed
        + '&date=' + sch.date
        + '&estimated_completion_date=' + sch.estimated_completion_date
        + '&images=' + sch.images
        + '&task=' + sch.task
        + '&comments=' + sch.comments
        , this.httpOptions)
        .subscribe((result: any) => {
          if (result.status_code === 1) {
            resolve('success');
          }
        }, error => reject(error));
    });
  }

  deleteSchedule(sch: Schedule) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.api_url + '/delete-schedule'
        + '?id=' + sch.id
        + '&site_id=' + this.site_id
        , this.httpOptions)
        .subscribe((result: any) => {
          if (result.status_code === 1) {
            resolve('success');
          }
        }, error => reject(error));
    });
  }

  /*Material Calls*/
  fetchMaterials(): Promise<Array<Material>> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.api_url + '/get-material?site_id=' + this.site_id
        , this.httpOptions)
        .subscribe((result: any) => {
          if (result.status_code === 1) {
            resolve(result.material_info);
          }
        }, error => reject(error));
    });
  }

  addMaterials(mat: Material) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.api_url
        + '/insert-material?site_id=' + this.site_id
        + '&cost=' + mat.cost
        + '&quantity=' + mat.quantity
        + '&consumed=' + mat.consumed
        + '&images=' + mat.images
        + '&type=' + mat.type
        , this.httpOptions)
        .subscribe((result: any) => {
          if (result.status_code === 1) {
            resolve('success');
          }
        }, error => reject(error));
    });
  }

  editMaterials(mat: Material) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.api_url
        + '/edit-material?site_id=' + this.site_id
        + '&cost=' + mat.cost
        + '&quantity=' + mat.quantity
        + '&consumed=' + mat.consumed
        + '&images=' + mat.images
        + '&type=' + mat.type
        , this.httpOptions)
        .subscribe((result: any) => {
          if (result.status_code === 1) {
            resolve('success');
          }
        }, error => reject(error));
    });
  }

  deleteMaterial(mat: Material) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.api_url + '/delete-material'
        + '?id=' + mat.id
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
