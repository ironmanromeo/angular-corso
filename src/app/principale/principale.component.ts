import { Component, OnInit } from '@angular/core';
import { SubordinatoComponent } from '../subordinato/subordinato.component';

@Component({
  selector: 'app-principale',
  templateUrl: './principale.component.html',
  styleUrls: ['./principale.component.css']
})
export class PrincipaleComponent implements OnInit {

  testo = "pippo"

  constructor() { 
    console.log("principale :", this.testo)
   }

  ngOnInit(): void {
  }

}
