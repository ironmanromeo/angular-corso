import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @ViewChild("cittaRef") cittaRef?:ElementRef

  nome = "Pippo"

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

  onMandaCitta() {
    const l = this.cittaRef?.nativeElement as HTMLInputElement
    console.log("citta",l.value)
  }

}
