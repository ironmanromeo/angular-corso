import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  nome = "Pippo"

  constructor() { }

  onInput(e:Event){
    const el = e.target as HTMLInputElement
    this.nome = el.value
  }
  
  onMandaForm(c:HTMLInputElement,i:HTMLInputElement){
    const persona ={
      nome:this.nome,
      cognome:c.value,
      indirizzo:i.value
    }
    console.log(persona)
  }

}
