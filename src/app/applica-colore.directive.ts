import { Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appApplicaColore]'
})
export class ApplicaColoreDirective {

  constructor(elementref:ElementRef, public renderer: Renderer2) {
    this.renderer.setStyle(elementref.nativeElement,"background-color","green")
   }

}
