import {Material} from '../models/material.model';

export interface MaterialHistory {
  date: string;
  details: Array<Material>;
}
