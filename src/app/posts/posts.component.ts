import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  titolo = "Mio titolo"
  disabilitato = false
  nomeBottone = "Accendi"

  constructor() { }

  ngOnInit(): void {
  }

  onPremuto() {
    const t = prompt("Inserisci titolo", this.titolo)
    if (t){
      this.titolo = t
    } else {
      this.titolo = ""
    }
  }
  
  onLoading(){
    this.disabilitato=true
    this.nomeBottone = "Accendi Loading..."
    setTimeout(() => {
      this.disabilitato=false
      this.nomeBottone= "Accendi"
    }, 2000);

  }

}
