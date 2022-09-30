import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principale',
  templateUrl: './principale.component.html',
  styleUrls: ['./principale.component.css']
})
export class PrincipaleComponent implements OnInit {
  mostrasubordinato:boolean=false

  

  constructor() { 
    function Toggle() {
      if (this.mostrasubordinato==true)
      {
        this.mostrasubordinato=false
      }
      else{
        this.mostrasubordinato=true
      }
    }
  }
 
  ngOnInit(): void {
  }

}
