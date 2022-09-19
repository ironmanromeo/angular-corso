import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titolo = 'Titolo pagina'
  altezza = 24
  disabilitato = true
  constructor() {
    setTimeout(()=>{
      this.disabilitato = !this.disabilitato
    },1000)
  }
}
