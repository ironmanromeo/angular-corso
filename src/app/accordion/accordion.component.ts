import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {

  @Input() titolo = "Mio Titolo"

 aperto = true

  constructor() { 
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(json => console.log(json))
  }

  onPremutoTitolo() {
    this.aperto = !this.aperto
  }

}
