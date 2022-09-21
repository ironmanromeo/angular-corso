import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomName = "Unknown"
  persons:string[] = ["Renzo", "Lucia", "Don Abbondio"]

  constructor(){}

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
    console.log("I received: " + t);
    
  }
}
