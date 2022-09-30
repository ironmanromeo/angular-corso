import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appApplicaColore]'
})
export class ApplicaColoreDirective implements OnInit{

  @HostBinding('style.backgroundColor') backgroundColor?:string 

  @Input() coloreOn = "red"
  @Input() coloreOff = "green"


  constructor() {
    
  }

  ngOnInit(): void {
    this.backgroundColor = this.coloreOff
  }

  @HostListener("mouseenter") 
  onMouseEnter(): void{
    this.backgroundColor = this.coloreOn
  }

  @HostListener("mouseleave") 
  onMouseLevae(): void{
    this.backgroundColor = this.coloreOff
  }


}
