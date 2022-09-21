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

  onMandaForm(f:HTMLInputElement,i:HTMLInputElement){
    const persona = 
    console.log("valore"+f.value);

    
  }

  onMandaCitta(d:HTMLInputElement) {
     const el = this.cittaRef?.nativeElement as HTMLInputElement
     console.log("Città"+el);
     
  }
  

}

