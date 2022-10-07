import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'riduciLunghezza'
})
export class RiduciLunghezzaPipe implements PipeTransform {

  transform(value: string, limiter: number = 10): unknown {
    if (value.length > limiter) {
      return value.substring(0, limiter)
    }
    return value
  }

}
