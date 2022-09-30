import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {

  @Input() titolo = "Mio titolo"

  aperto = true

  constructor() { 
    

    
  }

  onPremutoTitolo() {
    this.aperto = !this.aperto
  }


}
