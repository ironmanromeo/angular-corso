import { Directive, ElementRef, HostBinding, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appApplicaColore]'
})
export class ApplicaColoreDirective {

  @HostBinding("style.backgroundColor") backgroundColor?:string
  @HostListener("mouseenter")
  onMouseEnter(){
    this.backgroundColor="red"
  }
  @HostListener("mouseleave")
  onMouseLeave(){
    this.backgroundColor="yellow"
  }
  
  constructor(public elementRef: ElementRef) {

  }

  // ngOnInit(): void {
  //   this.backgroundColor = "red"
  // }

}
