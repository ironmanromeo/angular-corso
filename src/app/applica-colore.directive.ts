import { Directive, HostBinding, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appApplicaColore]'
})
export class ApplicaColoreDirective implements OnInit{

  @HostBinding("style.backgroundColor") backgroundColor?:string

  @Input() coloreOn:string = "red"
  @Input() coloreOff:string = "transparent"


  constructor() {

  }

  ngOnInit(): void{
    this.backgroundColor = this.coloreOff
  }

  @HostListener("mouseenter")
  onMouseEnter(){
    this.backgroundColor = this.coloreOn
  }

  @HostListener("mouseleave")
  onMouseLeave(){
    this.backgroundColor = this.coloreOff
  }

  



}
