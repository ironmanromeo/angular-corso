import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  titolo:string="Ueee"
  testo:string="Ueee"
  stato:string="display:none"
  onClick(){
    if(this.stato=="display:none")
    this.stato="display:block"
    else
    this.stato="display:none"
  }
}
