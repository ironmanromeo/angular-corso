import { Directive, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appApplicaColore]'
})
export class ApplicaColoreDirective implements OnInit{

  @HostBinding("style.backgroundColor") backgroundColor?:string

  constructor() {

  }

  ngOnInit(): void{
    this.backgroundColor = "blue"
  }

}
