import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @ViewChild("cittaRef") cittaRef?:ElementRef

  nome = "Pippo"

  constructor() { }

  onInput(e:Event){
    const el = e.target as HTMLInputElement
    this.nome = el.value
  }

  onMandaForm(cRef:HTMLInputElement, iRef:HTMLInputElement){

    const persona = {
      nome:this.nome,
      cognome:cRef.value,
      indirizzo:iRef.value
    }

    console.log("Persona da form: ",persona)
  }

  onMandaCitta(){
    
  }
}
