import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titolo = 'Pippo'
  altezza = 24
  disabilitato = true
  constructor() {
    setInterval(() => {
      this.disabilitato = !this.disabilitato
    }, 1000)
  }
}
