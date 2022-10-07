import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduceLength'
})
export class RiduciLunghezzaPipe implements PipeTransform {

  transform(value: string, limit: number = 10): string {
    if(value?.length > limit) {
      return value.substring(0, limit)
    } else {
      return value
    }
  }

}
