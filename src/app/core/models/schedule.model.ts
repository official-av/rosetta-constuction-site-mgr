export class Schedule {
  site_id?: string;
  id?: number;
  date?: Date;
  estimated_completion_date: Date;
  percentage_completed: number;
  units_completed: number;
  comments?: string;
  images?: string;
  task: string;
}
