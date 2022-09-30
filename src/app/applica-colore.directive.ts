import { Directive, ElementRef, HostBinding, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appApplicaColore]'
})
export class ApplicaColoreDirective implements OnInit{

  @HostBinding("style.backgroundColor") backgroundColor?:string

  constructor(public elementRef: ElementRef) {

  }
  @HostListener("mouseenter")
  onMouseEnter(){
    this.backgroundColor ="yellow"
  }

  @HostListener("mouseleave")
  onMouseLeave(){
    this.backgroundColor =""
  }
  ngOnInit(): void {
    // this.backgroundColor = "red"
  }

}


