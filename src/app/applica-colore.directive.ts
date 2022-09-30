import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appApplicaColore]'
})
export class ApplicaColoreDirective {


  
  constructor(public elementRef: ElementRef, public renderer: Renderer2) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green')
  }

}
