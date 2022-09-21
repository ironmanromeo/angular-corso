import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input("titoloAccordion") titolo:string = "Mio accordion"

  stato = true

  constructor() { }

  ngOnInit(): void {
  }

  onAccordionClick() {
    this.stato = !this.stato
  }

}
