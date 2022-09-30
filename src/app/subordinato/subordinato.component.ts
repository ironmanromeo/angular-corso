import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subordinato',
  templateUrl: './subordinato.component.html',
  styleUrls: ['./subordinato.component.css']
})
export class SubordinatoComponent implements OnInit {

  @Input() propertyTesto:String = ""

  constructor() {
    console.log("costruttore subordinato :", this.propertyTesto)
  }

  ngOnInit(): void {
    console.log("ngOnInit subordinato :", this.propertyTesto)
  }

}
