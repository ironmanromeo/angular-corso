import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Angular Corso"
  persone = ["renzo", "lucia", "don abbondio"]

  nomeRandom = "nessuno"
  nome = "nessuno"

  getRandom(){
    const indice = Math.floor(Math.random()*this.persone.length)
    const nuovoNome = this.persone[indice]
    return nuovoNome
  }

  controllaNome(){
    this.nome = this.getRandom()
    if(this.nome == this.nomeRandom){
      this.getRandom()
    }
    else{
      this.nomeRandom = this.nome
    }
  }

  onRiceviEventi(t:string){
    alert("Hai ricevuto:" + t)
  }


}
