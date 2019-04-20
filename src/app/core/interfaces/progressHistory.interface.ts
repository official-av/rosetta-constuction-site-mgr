import {Progress} from '../models/progress.model';

export interface ProgressHistory {
  date: string;
  details: Array<Progress>;
}
