import { Component, Input , OnInit} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  
  @Input() titolo= "Mio Titolo"

  @Input() titolo = "Mio titolo"

  @Input() titolo = "Mio titolo"

  aperto = true

  constructor() { }

  onPremutoTitolo() {
    this.aperto = !this.aperto
  }


}
