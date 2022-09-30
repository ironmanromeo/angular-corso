import { Directive, ElementRef, HostBinding, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appApplicaColore]'
})
export class ApplicaColoreDirective implements OnInit{

  @Input() coloreOn = "blue"
  @Input() coloreOff = "orange"

  @HostBinding("style.backgroundColor") backgroundColor?:string


  constructor(public elementRef: ElementRef) {

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
