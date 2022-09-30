<<<<<<< HEAD
import {
  Component,
  Input
} from "@angular/core"

@Component({
  selector: "app-accordion",
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.css"],
})
export class AccordionComponent {
  @Input() title?: string = "My title"

  list = []

  open = false

  onShow() {
    this.open = !this.open
  }
}
=======
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {

  @Input() titolo = "Mio titolo"

  aperto = false

  constructor() { }

  onPremutoTitolo() {
    this.aperto = !this.aperto
  }


}
>>>>>>> origin/main
