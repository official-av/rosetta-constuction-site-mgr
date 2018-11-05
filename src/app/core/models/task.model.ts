import {Item} from './item.model';

export class Task {
  expected_progress: number;
  actual_progress: number;
  items: Array<Item>;
  task: string;
  site_id?: string;
}
