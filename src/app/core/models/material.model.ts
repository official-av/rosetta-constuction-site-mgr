export class Material {
  site_id?: string;
  id?: number;
  type: string;
  quantity: number;
  in_vs_out?: number;
  cost: number;
  date: string;
  comments?: number;
  images?: string;

  constructor() {
    this.in_vs_out = -1;
  }
}
