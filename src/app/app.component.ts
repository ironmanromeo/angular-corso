import { Component } from '@angular/core';

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
  randomName = "Unknown"
  persons:string[] = ["Renzo", "Lucia", "Don Abbondio"]

  posts:Post[] = []

  constructor(){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        this.posts = json
      })
  }

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
  }
}
