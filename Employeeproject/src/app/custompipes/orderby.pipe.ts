import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby',
})
export class OrderbyPipe implements PipeTransform {
  transform(arr: any[], sortcase?: string): any[] {

    console.log(typeof arr[1])
    if (sortcase == 'asec') {
      return arr.sort((s1, s2) => s1-s2);
    } else {
      return arr.sort();
    }
  }
}
