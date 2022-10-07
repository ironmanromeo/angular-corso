import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'riduciLunghezza'
})
export class RiduciLunghezzaPipe implements PipeTransform {

  transform(s:string, limite: number = 10) {
    if  (s.length>limite){
      return s.substring(0,limite);
    }
    return
    
  }

}
