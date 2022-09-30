import { Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appApplicaColore]'
})
export class ApplicaColoreDirective implements OnInit{

  @HostBinding("style.backgroundColor") backgroundColor?:string

  constructor(public elementRef: ElementRef) {

  }
  @HostListener("mouseenter")
  onMouseEnter() {
    this.backgroundColor="red"
  }
  @HostListener("mouseleave")
  onMouseLeave(){
    this.backgroundColor="yellow"
  }
  ngOnInit(): void {
    //this.backgroundColor = "red"
  }

}
