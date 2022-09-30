import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-principale',
  templateUrl: './principale.component.html',
  styleUrls: ['./principale.component.css']
})
export class PrincipaleComponent implements OnInit {
  mostraSubordinato :boolean = true
  constructor() { }

  ngOnInit(): void {

  }

  toggle(){
    this.mostraSubordinato=!this.mostraSubordinato
  }

}
