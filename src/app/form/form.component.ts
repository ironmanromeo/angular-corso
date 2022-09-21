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

  onMandaForm(f:HTMLInputElement, g:HTMLInputElement) {
    console.log("Cognome: " +f.value+" Indirizzo: " +g.value)
  }

  onMandaCitta() {

  }

}
