import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principale',
  templateUrl: './principale.component.html',
  styleUrls: ['./principale.component.css']
})
export class PrincipaleComponent implements OnInit {
  mostrasubordinato:boolean=false

  mostraSubordinato = false

  constructor() { 

  }
 
  ngOnInit(): void {
  }

  changeStatus() {
    this.mostraSubordinato = !this.mostraSubordinato
    console.log(this.mostraSubordinato);
  }

}
