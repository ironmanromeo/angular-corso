import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Angular Corso"
  persone = ["Renzo, Lucia"]

  nomeRandom = "nessuno"

  getRandom() {
    const indice = Math.floor(Math.random() * this.persone.length)
    const nuovoNome = this.persone[indice]
    return nuovoNome
  }

  onGeneraRandom() {
    const nome = this.getRandom()
    this.nomeRandom = nome
    alert("onGeneraRandom")
  }

}