import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principale',
  templateUrl: './principale.component.html',
  styleUrls: ['./principale.component.css']
})
export class PrincipaleComponent implements OnInit {

  testo = "pippo"

  constructor() { 
    console.log("costruttore principale :", this.testo)
   }

  ngOnInit(): void {
    console.log("noOnInit principale :", this.testo)
  }

}
