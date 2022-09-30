import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appApplicaColore]'
})
export class ApplicaColoreDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.backgroundColor="grey"
   }

}
