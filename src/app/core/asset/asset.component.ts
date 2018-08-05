import {Component, OnInit} from '@angular/core';
import {ItemModel} from '../models/item.model';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {
  category = 'Labor';
  /*will fetch from route*/
  items: Array<ItemModel> = [
    {item: 'Carpenter', unit_cost: 56, category: 'Labor'},
    {item: 'Plumber', unit_cost: 59, category: 'Labor'},
    {item: 'Mason', unit_cost: 98, category: 'Labor'},
    {item: 'Iron', unit_cost: 98, category: 'Material'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
