export class Material {
  SiteID?: string;
  id?: number;
  MaterialName: string;
  MaterialType?: string;
  InventoryType: 'O' | 'I';
  MaterialQuantity: number;
  MaterialUnits: number;
  TransactionDate: string;
  date: string;
  Comments?: number;

  // images?: string;

  constructor() {
    this.InventoryType = 'O';
  }
}
