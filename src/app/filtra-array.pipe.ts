import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtraArray'
})
export class FiltraArrayPipe implements PipeTransform {

  transform(array: any[], value: string, key: string): any[] {
    if(value === "") return array
    const numberValue = +value
    return array.filter( v => v[key] === numberValue )
  }
}
