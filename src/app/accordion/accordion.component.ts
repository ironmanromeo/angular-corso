import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  aperto=false

  constructor() { }

  ngOnInit(): void {
  }
  onPremutoTitolo(){
  this.aperto= !this.aperto
  
  }
}
