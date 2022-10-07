import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'riduciLunghezza'
})
export class RiduciLunghezzaPipe implements PipeTransform {

  transform(value: string, limite:number =10): string {
    if (value.length>limite){
      return value.substring(0, 10)
    }
    return value;
  }

}
