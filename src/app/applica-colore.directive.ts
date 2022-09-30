import { Directive, ElementRef, HostBinding, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appApplicaColore]'
})
export class ApplicaColoreDirective implements OnInit{

  @HostBinding('style.backgroundColor') backgroundColor?:string 
  ngOnInit(): void {
    this.backgroundColor = "red"
  }

}
