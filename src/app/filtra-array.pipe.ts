import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtraArray'
})
export class FiltraArrayPipe implements PipeTransform {

  transform(array: any[], valore: string, chiave: string): any[] {
    if (valore=== "") return array
    
    //const numberValue = +valore
    return array.filter( v => v[chiave] ==)
    }

}
