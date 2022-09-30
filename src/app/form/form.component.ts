<<<<<<< HEAD
import {
    Component,
    ElementRef,
    ViewChild
} from "@angular/core"

@Component({
    selector: "app-form",
    templateUrl: "./form.component.html",
    styleUrls: ["./form.component.css"],
})
export class FormComponent {

    @ViewChild("cittaRef") cittaRef?: ElementRef
    formLabel = "Form Title"

    onEditedInput(e: Event) {
        const myInput = <HTMLInputElement>e.target
        this.formLabel = myInput.value
      }

      onSendForm(input1: HTMLInputElement, input2: HTMLInputElement) {
        const persona = {
            nome: this.formLabel,
            cognome: input1.value,
            eta: 20,
            indirizzo: input2.value
        }
        console.log(persona);
      }

      onSendCity() {
        console.log(this.cittaRef?.nativeElement.value);
      }
}
=======
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

  onMandaCitta() {
    const el = this.cittaRef?.nativeElement as HTMLInputElement
    console.log("Citta:",el.value)
  }

}
>>>>>>> origin/main
