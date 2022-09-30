import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appApplicaColore]'
})
export class ApplicaColoreDirective {
  
@Input() colorOff?:string
@Input() colorOn?:string
  @HostBinding("style.backgroundColor") backgroundcolor?:string
  constructor(public elementRef: ElementRef, public renderer: Renderer2) {
    this.backgroundcolor=this.colorOff
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green')
  }
  @HostListener("mouseenter")
  onMouseEnter(){
    this.backgroundcolor=this.colorOn
  }
  @HostListener("mouseleave")
  onMouseLeave(){
    this.backgroundcolor=this.colorOff
  }
  ngOnInit():void{

  }

}
