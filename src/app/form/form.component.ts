import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
  nome="Pippo"

  onInput(e:Event){
    const el = <HTMLInputElement> e.target
    this.nome= el.value

  }

  constructor() { }


}
