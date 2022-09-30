import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appApplicaColore]'
})
export class ApplicaColoreDirective implements OnInit{
  @HostBinding("style.backgroundColor") backgorundColor?:string
  @Input() coloreOn:string="red"
  @Input() coloreOff: string = "pink"
  constructor(public elementRef: ElementRef) {

  }
  ngOnInit(): void {

  }
  @HostListener("mouseenter")
  onMouseEnter(){
    this.backgorundColor=this.coloreOn
  }
  @HostListener("mouseleave")
  onMouseLeave(){
    this.backgorundColor=this.coloreOff
  }
}
