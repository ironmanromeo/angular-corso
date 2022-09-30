import { Directive, ElementRef, HostBinding, OnInit } from '@angular/core';

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

}
