import { Component } from '@angular/core';
  
  @Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
  })
  export class FormComponent {
  
    nome = "Pippo"
  
    onPremuto(e: Event) {
        const inputVal = <HTMLInputElement>e.target;
        this.nome = inputVal.value;
    }
  }
  