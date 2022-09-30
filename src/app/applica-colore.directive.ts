import { Directive, ElementRef, HostBinding, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appApplicaColore]'
})
export class ApplicaColoreDirective implements OnInit{

  @HostBinding("style.backgroundColor") backgroundColor?:string

  constructor(public elementRef: ElementRef) {

  }

  ngOnInit(): void {
    this.backgroundColor = "red"
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = "green"
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = "transparent"
  }

  @HostListener('window:keydown.arrowright', ['$event']) onRightArrowDown(event: KeyboardEvent){
    this.backgroundColor = "yellow"
  }

  @HostListener('window:keyup.arrowright', ['$event']) onRightArrowUp(event: KeyboardEvent){
    this.backgroundColor = "red"
  }

}
