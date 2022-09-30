import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appApplicaColore]'
})
export class ApplicaColoreDirective {

  constructor(public elementRef: ElementRef, public renderer: Renderer2) {
    elementRef.nativeElement.style.background = "green"
  }

  ngOnInit(): void{
    this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'red')
  }

}
