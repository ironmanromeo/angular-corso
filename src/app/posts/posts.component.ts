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

  cambiaTitolo(){
    const nuovoTitolo = prompt("Inserisci nuovo titolo", this.titolo)
    if(nuovoTitolo){
      this.titolo = nuovoTitolo
    }
    else{
      this.titolo = ""
    }
  }

  ngOnInit(): void {
  }

}
