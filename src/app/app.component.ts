import { Component, ViewEncapsulation } from '@angular/core';

type Post = {
  userId:number
  id:number
  title:string
  body:number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-corso';
  persone = ["Renzo","Lucia","Don Abbondio"]

  nomeRandom = "nessuno"

  posts:Post[] = []

  constructor() {
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => {
    this.posts = json
    console.log(this.posts)
  })
  }

  getRandom() {
    const indice = Math.floor(Math.random() * this.persone.length)
    const nuovoNome = this.persone[indice]
    return nuovoNome
  }

  onGeneraRandom() {
    const nome = this.getRandom()
    this.nomeRandom = nome
  }

  onRiceviEvento(t:string) {
    alert(t)
  }
}
