import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  nome:string="Pippo"

  onInput(e: Event){
    const el=  e.target as HTMLInputElement
    this.nome = el.value
  }
}
