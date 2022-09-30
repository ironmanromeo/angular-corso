import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principale',
  templateUrl: './principale.component.html',
  styleUrls: ['./principale.component.css']
})
export class PrincipaleComponent implements OnInit {

  mostraSubordinato:Boolean = false

  toggleBtn = "toggle"

  constructor() {}

  toggleSubordinato() {
    this.mostraSubordinato = !this.mostraSubordinato
  }

  ngOnInit(): void {
  }

}
