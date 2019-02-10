import {Diesel} from '../models/diesel.model';

export interface DieselHistory {
  date: string;
  details: Array<Diesel>;
}
