import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appApplicaColore]'
})
export class ApplicaColoreDirective {

  constructor(public renderer: Renderer2, public elementRef: ElementRef) { 
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red')

  }

}
