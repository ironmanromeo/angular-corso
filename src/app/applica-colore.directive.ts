import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appApplicaColore]'
})
export class ApplicaColoreDirective {

  @HostBinding("style.backgroundColor") backgroundColor?:string

  @Input("appApplicaColore") coloreOn:string = "orange"
  @Input() coloreOff:string = "red"

  constructor() {
    //this.backgroundColor = this.coloreOff

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
