import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  titolo = "Mio titolo"
  disabilitato = false

  constructor() { }

  ngOnInit(): void {
  }

<<<<<<< HEAD

  onPremuto() {
    const t = prompt("Nuovo titolo")
    if(t){
=======
  onPremuto() {
    const t = prompt("Inserisci titolo", this.titolo)
    if (t){
>>>>>>> origin/main
      this.titolo = t
    } else {
      this.titolo = ""
    }
  }
<<<<<<< HEAD
=======

>>>>>>> origin/main
}
