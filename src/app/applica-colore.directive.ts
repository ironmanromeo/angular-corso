import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appApplicaColore]'
})
export class ApplicaColoreDirective implements OnInit{

  @Input() coloreOn:string = "red"
  @Input() coloreOff:string = "yellow"


  @HostBinding("style.backgroundColor") backgroundColor?:string

  @HostListener("mouseenter")
  onMouseEnter(){
    this.backgroundColor= this.coloreOn
  }

  @HostListener("mouseleave")
  onMouseLeave(){
    this.backgroundColor=this.coloreOff
  }

  constructor() {  }

  ngOnInit(): void {
    this.backgroundColor =this.coloreOff
  }

}
