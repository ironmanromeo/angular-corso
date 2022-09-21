import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-corso';
  persone = ["Renzo", "Lucia", "Don Abbondio"]
  nomeRandom ="nessuno"

  getRanbdom(){
    const indice = Math.floor(Math.random() * this.persone.length)
    const nuovoNome = this.persone[indice]
    return nuovoNome
  }

  onGeneraRandom() {
    const nome = this.getRanbdom()
    this.nomeRandom = nome
  }
}
