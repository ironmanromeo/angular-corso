import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  nome="Pippo"

  constructor() { }

  ngOnInit(): void {
  }

  onInput(e:Event){
    const el=<HTMLInputElement>e.target
    this.nome=el.value
  }
}
