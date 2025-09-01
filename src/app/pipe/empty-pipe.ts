import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empty',
  standalone: true,
})
export class EmptyPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return value === null || value === undefined || value === '' ? '-' : value;
  }
}
