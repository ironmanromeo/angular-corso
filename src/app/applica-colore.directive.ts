import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appApplicaColore]'
})
export class ApplicaColoreDirective {

  constructor(elementRef: ElementRef) {
    elementRef.nativeElement.style.backgroundColor="green"
   }

}
