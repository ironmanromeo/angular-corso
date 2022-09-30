import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subordinato',
  templateUrl: './subordinato.component.html',
  styleUrls: ['./subordinato.component.css']
})
export class SubordinatoComponent implements OnInit {


  constructor() { 
    console.log("constructor",this.testo)
  }


  ngOnInit(): void {
    console.log("OnInit",this.testo)
  }

  @Input() testo?:string

  checkTesto(){
    return this.testo==="pippo"
  }
}
