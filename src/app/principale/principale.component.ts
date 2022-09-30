import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-principale',
  templateUrl: './principale.component.html',
  styleUrls: ['./principale.component.css']
})
export class PrincipaleComponent implements OnInit {


  @Input() mostraSubordinato:boolean=false

  constructor() { }

  ngOnInit(): void {
  }

  cambiaStato(){
    this.mostraSubordinato=!this.mostraSubordinato
    console.log(this.mostraSubordinato)
  }


}
