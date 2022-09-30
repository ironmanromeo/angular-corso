import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principale',
  templateUrl: './principale.component.html',
  styleUrls: ['./principale.component.css']
})
export class PrincipaleComponent implements OnInit {

  mostraSubordinato = false

  toggleSubordinato() {
    this.mostraSubordinato = !this.mostraSubordinato
  }

  ngOnInit(): void {
    console.log("principale ngOnInit", this.mostraSubordinato)
  }

  changeStatus() {
    this.mostraSubordinato = !this.mostraSubordinato
    console.log(this.mostraSubordinato);
  }

}
