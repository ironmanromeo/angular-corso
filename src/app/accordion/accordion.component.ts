import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  @Input("ti") titolo = "Mio titolo"
  aperto=true
  constructor() { }



  onPremuto(){
    this.aperto=!this.aperto
  }

}
