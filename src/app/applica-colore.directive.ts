import { Directive, ElementRef, HostBinding, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appApplicaColore]'
})
export class ApplicaColoreDirective implements OnInit{

@HostBinding("style.backgroundColor") backroundColor?:string

@Input() coloreOn?:string
@Input() coloreOff?:string

  constructor() {
    
  }

@HostListener("mouseenter")
OnMouseEnter(){
  this.backroundColor = this.coloreOn
}

@HostListener("mouseleave")
OnMouseLeave(){
  this.backroundColor = this.coloreOff
}


  ngOnInit(): void {
      //this.backroundColor = "red"
  }


}
