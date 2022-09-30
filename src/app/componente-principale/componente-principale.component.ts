import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-principale',
  templateUrl: './componente-principale.component.html',
  styleUrls: ['./componente-principale.component.css']
})
export class ComponentePrincipaleComponent implements OnInit {

  mostraSubordinato = false

  constructor() { }

  mostra() {
    this.mostraSubordinato =! this.mostraSubordinato
  }

  ngOnInit(): void {
  }

}
