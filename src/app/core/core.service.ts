import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {Machinery} from './models/machinery.model';
import {Material} from './models/material.model';
import {Report} from './models/report.model';
import {Labor2} from './models/newlabor.model';
import {LaborHistory} from './interfaces/laborHistory.interface';
import {Diesel} from './models/diesel.model';
import {DieselHistory} from './interfaces/dieselHistory.interface';
import {Progress} from './models/progress.model';
import {ProgressHistory} from './interfaces/progressHistory.interface';
import {Item} from './models/item.model';

@Injectable()
export class CoreService {
  site_id = 1;
  schedules: Map<number, Item>;
  current_labor = new BehaviorSubject(new Labor2());
  current_diesel = new BehaviorSubject(new Diesel());
  current_machine = new BehaviorSubject(new Machinery());
  current_material = new BehaviorSubject(new Material());
  current_progress = new BehaviorSubject(new Progress());
  // current_task = new BehaviorSubject(new task());
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) {
    /*this.fetchSchedules()
      .then(result => this.schedules = result);*/
  }

  /*Labor calls*/
  fetchLabor(): Promise<Array<Labor2>> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.api_url + '/get-labor?site_id=' + this.site_id
        , this.httpOptions)
        .subscribe((result: any) => {
          if (result.status_code === 1) {
            const obj = result.labor_info;
            resolve(obj[0].details);
          }
        }, error => reject(error));
    });
  }

  addLabor(labor: Labor2) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.api_url
        + '/add-labor?site_id=' + this.site_id
        + '&type=' + labor.type
        + '&daily=' + labor.daily
        + '&male_count=' + labor.male_count
        + '&female_count=' + labor.female_count
        + '&male_rate=' + labor.male_rate
        + '&female_rate=' + labor.female_rate
        + '&work_done=' + labor.work_done
        , this.httpOptions)
        .subscribe((result: any) => {
          if (result.status_code === 1) {
            resolve('success');
          }
        }, error => reject(error));
    });
  }

  editLabor(labor: Labor2) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.api_url
        + '/edit-labor?site_id=' + this.site_id
        + '&type=' + labor.type
        + '&daily=' + labor.daily
        + '&male_count=' + labor.male_count
        + '&female_count=' + labor.female_count
        + '&male_rate=' + labor.male_rate
        + '&female_rate=' + labor.female_rate
        + '&work_done=' + labor.work_done
        + '&id=' + labor.id
        , this.httpOptions)
        .subscribe((result: any) => {
          if (result.status_code === 1) {
            resolve('success');
          }
        }, error => reject(error));
    });
  }

  deleteLabor(labor: Labor2) {
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

  getLaborReport(start_date: string, end_date: string): Promise<Array<LaborHistory>> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.api_url + '/get-labor-report'
        + '?site_id=' + this.site_id
        + '&start_date=' + start_date
        + '&end_date=' + end_date
        , this.httpOptions)
        .subscribe((result: any) => {
          if (result.status_code === 1) {
            const obj: Array<LaborHistory> = result.labor_info;
            console.log(obj);
            resolve(obj);
          }
        }, error => reject(error));
    });
  }

  /*Diesel Calls*/
  fetchDiesel(): Promise<Array<Diesel>> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.api_url + '/get-diesel?site_id=' + this.site_id
        , this.httpOptions)
        .subscribe((result: any) => {
          if (result.status_code === 1) {
            const obj = result.diesel_info;
            resolve(obj[0].details);
          }
        }, error => reject(error));
    });
  }

  addDiesel(diesel: Diesel) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.api_url
        + '/add-diesel?site_id=' + this.site_id
        + '&vehicle_no=' + diesel.vehicle_no
        + '&litres=' + diesel.litres
        + '&comment=' + diesel.comment
        + '&rate=' + diesel.rate
        , this.httpOptions)
        .subscribe((result: any) => {
          if (result.status_code === 1) {
            resolve('success');
          }
        }, error => reject(error));
    });
  }

  editDiesel(diesel: Diesel) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.api_url
        + '/edit-diesel?site_id=' + this.site_id
        + '&vehicle_no=' + diesel.vehicle_no
        + '&litres=' + diesel.litres
        + '&comment=' + diesel.comment
        + '&id=' + diesel.id
        + '&rate=' + diesel.rate
        , this.httpOptions)
        .subscribe((result: any) => {
          if (result.status_code === 1) {
            resolve('success');
          }
        }, error => reject(error));
    });
  }

  deleteDiesel(diesel: Diesel) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.api_url + '/delete-diesel'
        + '?id=' + diesel.id
        + '&site_id=' + this.site_id
        , this.httpOptions)
        .subscribe((result: any) => {
          if (result.status_code === 1) {
            resolve('success');
          }
        }, error => reject(error));
    });
  }

  getDieselReport(start_date: string, end_date: string): Promise<Array<DieselHistory>> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.api_url + '/get-diesel-report'
        + '?site_id=' + this.site_id
        + '&start_date=' + start_date
        + '&end_date=' + end_date
        , this.httpOptions)
        .subscribe((result: any) => {
          if (result.status_code === 1) {
            const obj: Array<DieselHistory> = result.diesel_info;
            console.log(obj);
            resolve(obj);
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

  /*Item Calls*/
  fetchSchedules(): Promise<Map<number, Item>> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.api_url + '/get-schedule?site_id=' + this.site_id
        , this.httpOptions)
        .subscribe((result: any) => {
          if (result.status_code === 1) {
            const obj = result.item_info;
            const map = new Map<number, Item>();
            for (const key in obj) {
              const itemArr: Array<Item> = obj[key];
              itemArr.forEach(m => {
                map.set(m.id, m);
              });
            }
            resolve(map);
            console.log(map);
          }
        }, error => reject(error));
    });
  }

  /*addSchedules(sch: Item) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.api_url
        + '/insert-schedule?site_id=' + this.site_id
        + '&percentage_complted=' + sch.percentage_completed
        + '&units_completed=' + sch.units_completed
        + '&start_date=' + sch.start_date
        + '&end_date=' + sch.end_date
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

  editSchedule(sch: Item) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.api_url
        + '/edit-schedule?site_id=' + this.site_id
        + '&percentage_complted=' + sch.percentage_completed
        + '&units_completed=' + sch.units_completed
        + '&start_date=' + sch.start_date
        + '&end_date=' + sch.end_date
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

  deleteSchedule(sch: Item) {
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
  }*/

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
        + '&in_vs_out=' + mat.in_vs_out
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
        + '&id=' + mat.id
        + '&cost=' + mat.cost
        + '&quantity=' + mat.quantity
        + '&in_vs_out=' + mat.in_vs_out
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

  // Report Calls
  getReport(): Promise<Report> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.api_url + '/daily-report?site_id=' + this.site_id
        , this.httpOptions)
        .subscribe((result: any) => {
          if (result.statusCode === 1) {
            resolve(result.daily_report);
          }
        }, error => reject(error));
    });
  }

  /*  async getItems(): Promise<any> {
      let labors = await this.fetchLabor()
        .then((result: Array<Labor>) => labors = result)
        .catch(error => console.log(error));
      let machines = await this.fetchMachinery()
        .then((result: Array<Machinery>) => machines = result)
        .catch(error => console.log(error));
      let materials = await this.fetchMaterials()
        .then((result: Array<Material>) => materials = result)
        .catch(error => console.log(error));
      let schedules = await this.fetchSchedules()
        .then((result: Array<Item>) => schedules = result)
        .catch(error => console.log(error));
      console.log({labors: labors, machines: machines, materials: materials, schedules: schedules});
      return {labors: labors, machines: machines, materials: materials, schedules: schedules};
    }

    checkDate(date: string) {
      return date === new Date().toISOString().split('T')[0];
    }

    async fetchActivities(): Promise<any> {
      const obj2: {
        labors: Array<Labor>, machines: Array<Machinery>, materials: Array<Material>, schedules: Array<Item>
      } = {labors: [], machines: [], materials: [], schedules: []};
      const obj: any = await this.getItems();
      for (const sched of obj.schedules) {
        if (this.checkDate(sched.start_date)) {
          obj2.schedules.push(sched);
        }
      }
      for (const labor of obj.labors) {
        if (this.checkDate(labor.date)) {
          obj2.labors.push(labor);
        }
      }
      for (const mat of obj.materials) {
        if (this.checkDate(mat.date)) {
          obj2.materials.push(mat);
        }
      }
      for (const machine of obj.machines) {
        if (this.checkDate(machine.start_date)) {
          obj2.machines.push(machine);
        }
      }
      console.log(obj2);
      return (obj2);
    }*/

  /*Progress Calls*/
  getProgress(): Promise<Array<Progress>> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.api_url + '/get-progress?site_id=' + this.site_id
        , this.httpOptions)
        .subscribe((result: any) => {
          if (result.status_code === 1) {
            console.log(result);
            const obj = result.progress_info[0].details;
            resolve(obj);
          }
        }, error => reject(error));
    });
  }

  addProgress(progress: Progress) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.api_url
        + '/add-progress?site_id=' + this.site_id
        + '&schedule_id=' + progress.schedule_id
        + '&quantity=' + progress.quantity
        + '&comments=' + progress.comments
        , this.httpOptions)
        .subscribe((result: any) => {
          if (result.status_code === 1) {
            resolve(result.message);
          }
        }, error => reject(error));
    });
  }

  editProgress(progress: Progress) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.api_url
        + '/edit-progress?site_id=' + this.site_id
        + '&schedule_id=' + progress.schedule_id
        + '&quantity=' + progress.quantity
        + '&comments=' + progress.comments
        + '&id=' + progress.id
        , this.httpOptions)
        .subscribe((result: any) => {
          if (result.status_code === 1) {
            resolve(result.message);
          }
        }, error => reject(error));
    });
  }

  deleteProgress(id: number) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.api_url
        + '/delete-progress?site_id=' + this.site_id
        + '&id=' + id
        , this.httpOptions)
        .subscribe((result: any) => {
          if (result.status_code === 1) {
            resolve(result.message);
          }
        }, error => reject(error));
    });
  }

  getProgressReport(start_date: string, end_date: string): Promise<Array<ProgressHistory>> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.api_url + '/get-progress-report'
        + '?site_id=' + this.site_id
        + '&start_date=' + start_date
        + '&end_date=' + end_date
        , this.httpOptions)
        .subscribe((result: any) => {
          if (result.status_code === 1) {
            const obj: Array<ProgressHistory> = result.progress_info;
            console.log(obj);
            resolve(obj);
          }
        }, error => reject(error));
    });
  }
}
