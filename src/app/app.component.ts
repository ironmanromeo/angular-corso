import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titolo="Berserk"
  altezza = 24
  disabilitato = false
  constructor(){
    setInterval(()=>{
      this.disabilitato= false;
    },1000)
  }
}
