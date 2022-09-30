import { Directive, ElementRef, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appApplicaColore]'
})
export class ApplicaColoreDirective {

  @HostBinding('style.backgroundColor') backgroundColor?:String

  constructor() {
    
   }

   ngOnInit(): void {
    this.backgroundColor = "green"
   }

}
