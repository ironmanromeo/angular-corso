import { style } from '@angular/animations';
import { Directive, ElementRef, HostBinding, Renderer2 , OnInit} from '@angular/core';

@Directive({
  selector: '[appApplicaColore]'
})
export class ApplicaColoreDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor?:string
  ngOnInit():void{
    this.backgroundColor="blue"
  }

}
