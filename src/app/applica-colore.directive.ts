import { Directive, HostBinding, OnInit, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appApplicaColore]'
})
export class ApplicaColoreDirective implements OnInit {

  @HostBinding("style.backgroundColor") backgroundColor ?: String

  @Input() coloreOn = "orange"
  @Input() coloreOff = "transparent"

  constructor() {
    this.backgroundColor = this.coloreOff
  }

  ngOnInit(): void {

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
