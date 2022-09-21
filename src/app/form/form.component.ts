import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  nome = "Pippo" 

  modificaNome(e: Event){
    const el = e.target as HTMLInputElement
    this.nome = el.value
  }

  constructor() { }

  ngOnInit(): void {
  }

}
