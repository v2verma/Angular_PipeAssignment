import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, order: string): any {
    if (order === 'asc') {
      return value.sort((a, b) => {
        if (a['name'] < b['name']) { return -1; }
        if (a['name'] > b['name']) { return 1; }
        return 0;
        });
    }
    if (order === 'desc') {
      return value.sort((a, b) => {
        if (b['name'] < a['name']) { return -1; }
        if (b['name'] > a['name']) { return 1; }
        return 0;
        });
    }
  }

}
