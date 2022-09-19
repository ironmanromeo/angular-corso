import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titolo="Titolo pagina"
  altezza = 24
  disabilitato= true
  divText="HELLO"

  constructor(){
    
    setInterval(()=>{
      this.disabilitato=!this.disabilitato
    },1000)

    this.disabilitato=false

  }
}
