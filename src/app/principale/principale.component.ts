import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principale',
  templateUrl: './principale.component.html',
  styleUrls: ['./principale.component.css']
})
export class PrincipaleComponent implements OnInit {

  mostraSubordinata = true

  constructor() {}

  ngOnInit(): void {
  }

  toggle() {
    
    this.mostraSubordinata=!this.mostraSubordinata
    console.log(this.mostraSubordinata)
  }

}
