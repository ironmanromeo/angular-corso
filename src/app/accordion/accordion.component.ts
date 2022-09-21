import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {

    aperto=true

    constructor() { }

    onTitle() {
        this.aperto = !this.aperto
    }
}