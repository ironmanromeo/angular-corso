import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  persone = ["Renzo", "Lucia", "Don Abbondio"]
  nomeRandom = "nessuno"

  getRandom() {
    const indice = Math.floor(Math.random()*this.persone.length)
    const nuovoNome = this.persone[indice]
    return nuovoNome
  }
  onGeneraRandom() {
    alert("onGeneraRandom");
    const nuovonome = this.getRandom();
  }
}
