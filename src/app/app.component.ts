import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-corso';
  persone = ["Renzo", "Lucia", "Don abbondio"];

  nomeRandom = "nessuno"

  getRandom() {
    var indice = Math.floor(Math.random() * this.persone.length);
    const nuovoNome = this.persone[indice]
    return nuovoNome
  }
  onCambianome() {
    const nome = this.getRandom()
    this.nomeRandom = nome
  }
}

