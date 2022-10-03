import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appApplicaColore]'
})
export class ApplicaColoreDirective {

  @HostBinding("style.backgroundColor") backgroundColor?:string

<<<<<<< HEAD
  @Input("appApplicaColore") coloreOn:string = "orange"
  @Input() coloreOff:string = "red"
=======
  @Input("appApplicaColore") coloreOn?:string
  @Input() coloreOff:string = "transparent"
>>>>>>> origin/main

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
