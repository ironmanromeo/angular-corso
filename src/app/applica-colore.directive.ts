import { Directive, ElementRef, HostBinding, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appApplicaColore]'
})
export class ApplicaColoreDirective implements OnInit{

  @HostBinding("style.backgroundColor") backgroundColor?:string

  @Input("appApplicaColore") coloreOn?:string
  @Input() coloreOff:string = "transparent"

  constructor(public elementRef: ElementRef) {

  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.backgroundColor = this.coloreOn || "orange"
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.backgroundColor = this.coloreOff
  }

  ngOnInit(): void {
    this.backgroundColor = this.coloreOff
  }

}
