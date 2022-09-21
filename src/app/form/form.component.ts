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

  onModificaPippo(e:Event){
    const mioNome = <HTMLInputElement>e.target
    this.nome = mioNome.value
  }

}
