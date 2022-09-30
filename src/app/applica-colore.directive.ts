import { Directive, ElementRef, HostBinding, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appApplicaColore]'
})
export class ApplicaColoreDirective implements OnInit{

  @Input() coloreOn = "transparent"
  @Input() coloreOff?:string

  @HostBinding("style.backgroundColor") backgroundColor?:string


  constructor() {
    this.backgroundColor = this.coloreOff || "orange"
  }

  ngOnInit(): void {
    // this.backgroundColor = this.coloreOff
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
