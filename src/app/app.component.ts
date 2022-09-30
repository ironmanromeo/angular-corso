import { Component, ViewEncapsulation } from '@angular/core';

type Post = {
  userId:number
  id:number
  title:string
  body:string
}


type Post = {
  userId: number,
  id: number,
  title: string,
  body: string
}

@Component({
  selector: "app-root",
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  randomName = "Unknown"
  persons:string[] = ["Renzo", "Lucia", "Don Abbondio"]

  posts:Post[] = []

  constructor(){
=======

  posts:Post[] = []

  constructor() {
>>>>>>> origin/main
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        this.posts = json
      })
  }
<<<<<<< HEAD

  getRandomName() {
    let index = Math.floor(Math.random() * this.persons.length)
    const newName = this.persons[index]
    return newName
  }
  
  onChangeName() {
    const name = this.getRandomName()
    this.randomName = name
  }

  onReceiveEvent(t:string, sec?: string) {
    console.log("I received: " + t) 
=======
  
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
>>>>>>> origin/main
  }
}
