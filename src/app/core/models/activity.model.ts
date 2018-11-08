import {Task} from './task.model';
import {Labor} from './labor.model';
import {Material} from './material.model';
import {Machinery} from './machinery.model';

export class Activity {
  schedule: Array<Task>;
  labor: Array<Labor>;
  material: Array<Material>;
  machinery: Array<Machinery>;
}
