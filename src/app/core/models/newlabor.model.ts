export class Labor2 {
  id?: number;
  type: string;
  daily: number;
  male_count: number;
  female_count: number;
  male_rate: number;
  female_rate: number;
  work_done: string;
  receipt?: string;
  last_updated?: string;
  date?: string;
  total?: string;

  constructor() {
    this.type = 'General';
    this.male_rate = 0;
    this.female_rate = 0;
    this.male_count = 0;
    this.female_count = 0;
  }
}
