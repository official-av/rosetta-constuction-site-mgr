import {Pipe, PipeTransform} from '@angular/core';
import {ItemModel} from '../models/item.model';

@Pipe({name: 'ArrayFilterPipe'})
export class ArrayFilterPipe implements PipeTransform {
  transform(value: Array<ItemModel>, category: string): Array<ItemModel> {
    return value.filter(item => item.category === category);
  }
}
