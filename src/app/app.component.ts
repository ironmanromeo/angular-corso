import { Component, ViewEncapsulation } from '@angular/core';

type Post = {
  userId:number
  id:number
  title:string
  body:string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  posts: Post[] = []

  constructor() {
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => {
    this.posts = json
  })
  }

  title = 'angular-corso';
  persone = ["Renzo","Lucia","Don Abbondio"]

  nomeRandom = "nessuno"

  getRandom() {
    const indice = Math.floor(Math.random() * this.persone.length)
    const nuovoNome = this.persone[indice]
    return nuovoNome
  }
  onGeneraRandom() {
    const nome = this.getRandom()
    this.nomeRandom = nome
  }

  onRicevitEvento(t:string, sec?:string){
    console.log("Ho ricevuto: ",t + sec)
  }
}

