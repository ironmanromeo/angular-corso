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

  onMandaForm(cognome:HTMLInputElement,indirizzo:HTMLInputElement){
    
    const persona= {
      nome:this.nome,
      cognome:cognome.value,
      indirizzo:indirizzo.value
    }
    console.log("Persona da Form: ",persona)
    
  }

}
