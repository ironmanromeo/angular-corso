import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appApplicaColore]'
})
export class ApplicaColoreDirective implements OnInit{

  @HostBinding('style.backgroundColor') backgroundColor?:string 

  constructor(public elementRef: ElementRef) {
    
  }

  @HostListener("mouseenter") 
  onMouseEnter(): void{
    this.backgroundColor = "red"
  }

  @HostListener("mouseleave") 
  onMouseLevae(): void{
    this.backgroundColor = "green"
  }

  ngOnInit(): void {
    //this.backgroundColor = "red"
  }

}
