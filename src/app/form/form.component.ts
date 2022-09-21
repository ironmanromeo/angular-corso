import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input("n")nome="pippo"
  @Output() generaEvento = new EventEmitter<string>()
  constructor() { }

  onInput(v:Event){
    const element= v.target as HTMLInputElement
    this.nome =element.value
    
  
  }
}
