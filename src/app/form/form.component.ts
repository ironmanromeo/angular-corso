import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  nome = "pippo"

  constructor() { }

  ngOnInit(): void {
  }

  onMandaForm(cRef:HTMLInputElement, iRef:HTMLInputElement){

    const persona = {
      nome:this.nome,
      cognome:cRef.value,
      indirizzo:iRef.value
    }

    console.log("Persona da form: ",persona)
  }

}
