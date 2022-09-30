import { constructorParametersDownlevelTransform } from '@angular/compiler-cli';
import { Directive, ElementRef, Renderer2, HostBinding} from '@angular/core';

@Directive({
  selector: '[appApplicaColore]'
})
export class ApplicaColoreDirective {
  @HostBinding("style.backgroundColor") backgroundColor?:string

  constructor(public elementRef: ElementRef) {
    this.backgroundColor="red"
    }
  }
