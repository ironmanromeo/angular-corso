import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principale',
  templateUrl: './principale.component.html',
  styleUrls: ['./principale.component.css']
})
export class PrincipaleComponent implements OnInit {

  mostraSubordinato?:boolean

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    if(this.mostraSubordinato===true){
      this.mostraSubordinato = false
    }else{
      this.mostraSubordinato = true
    }
  }
}
