import { Directive, ElementRef, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appApplicaColore]'
})
export class ApplicaColoreDirective {

  @HostBinding("style.backgroundColor") backgroundColor?:string

  constructor(public elementRef: ElementRef) {

    ngOnInit(): void {
      this.backgroundColor = "red"
    }
    
  }

}
