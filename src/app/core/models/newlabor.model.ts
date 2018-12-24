import {Person} from './person.model';

export class Labor2 {
  type: string;
  category: 'daily' | 'maintenance';
  male: Person;
  female: Person;
  workdone: string;
  receipt: string;

  constructor() {
    this.type = 'General';
  }
}
