import {TaskStatus} from './task-status.mdoel';
import {ItemModel} from './item.model';

export class Task {
  task_id: number;
  description: string;
  start_date: Date;
  end_date: Date;
  status: TaskStatus;
  item: ItemModel;
  item_units: number;
}
