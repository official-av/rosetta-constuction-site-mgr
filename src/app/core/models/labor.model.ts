export class Labor {
  site_id?: number;
  id?: number;
  type: string;
  rate: number;
  receipt?: string;
  date?: string;
  number: number;
  gender: 'M' | 'F';

  constructor() {
    this.gender = 'M';
  }
}
