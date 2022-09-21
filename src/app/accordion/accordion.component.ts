import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

    aperto = false

  constructor() { }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

  onPremutoTitolo(){
    this.aperto = !this.aperto
  }

}
