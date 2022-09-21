import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  nome="Mario"
  constructor() { }

  ngOnInit(): void {
  }

  onInserito(e:Event){
    const inputEvent=<HTMLInputElement>e.target
    this.nome=inputEvent.value
  }

}
