import { UpperCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  //  transform(data: string[], query: string): string[] {
  //   return data.filter(txt => txt.startsWith(query));
  // }

  transform(data: string[], query: string): string[] {
    return data.filter(txt => txt.toLowerCase().startsWith(query.toLowerCase()));
  }
}
