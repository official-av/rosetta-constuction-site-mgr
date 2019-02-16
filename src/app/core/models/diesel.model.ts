export class Diesel {
  id?: number;
  site_id?: number;
  date?: string;
  vehicle_no: string;
  litres: number;
  comment?: string;
  rate: number;
  last_updated?: string;

  constructor() {
    this.litres = 0;
    this.rate = 0;
  }
}
