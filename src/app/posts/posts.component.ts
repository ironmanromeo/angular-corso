import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  titolo = "Mio titolo"
  disabilitato = false
  disabilitato_accendi = false
  textButton = "Accendi"

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

  loading(){

    this.disabilitato_accendi = true
    this.textButton = "Loading"

    setTimeout(() => {
      this.disabilitato_accendi = false
      this.textButton = "Accendi"
    }, 2000)

  }

  ngOnInit(): void {
  }

}
