import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appApplicaColore]'
})
export class ApplicaColoreDirective {

  constructor(public renderer:Renderer2, public elementRef:ElementRef) {
    
   }

   ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green')
   }

}
