import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {

  aperto = true
  @Input("ti")titolo=""

  constructor() { }

  onPremutoTitolo() {
    this.aperto = !this.aperto
  }


}
