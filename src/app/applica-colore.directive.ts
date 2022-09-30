import { Directive, ElementRef, HostBinding, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appApplicaColore]'
})
export class ApplicaColoreDirective {
@Input() coloreOn:string="red"
@Input() coloreOff:string="transparent"
  @HostBinding("style.backgroundColor") backgroundColor?:string


  constructor() {

  }
  ngOnInit(): void {
    this.backgroundColor = this.coloreOff
  }

  @HostListener("mouseenter")
  onMouseEnter() {
    this.backgroundColor = this.coloreOn
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.backgroundColor = this.coloreOff
  }

 

}
