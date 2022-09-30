import { Directive, ElementRef, HostBinding, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appApplicaColore]'
})
export class ApplicaColoreDirective implements OnInit{

  @HostBinding('style.backgroundColor') backgroundColor?:string 

  @Input("appApplicaColore") coloreOn?:string
  @Input() coloreOff = "green"

  constructor() {
    //this.backgroundColor = this.coloreOff
  }

  ngOnInit(): void {
    this.backgroundColor = this.coloreOff
  }

  @HostListener("mouseenter")
  onMouseEnter() {
    this.backgroundColor = this.coloreOn || "orange"
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.backgroundColor = this.coloreOff
  }
}
