import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principale',
  templateUrl: './principale.component.html',
  styleUrls: ['./principale.component.css']
})
export class PrincipaleComponent implements OnInit {
  mostrasubordinato=true
  

  constructor() { }

  ngOnInit(): void {
  }
mostra(){

  this.mostrasubordinato=!this.mostrasubordinato
}
}
