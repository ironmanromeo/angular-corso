import { Component, OnInit } from '@angular/core';
import { Post } from '../dati/posts.data'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:Post[] = []

  titolo = "Mio titolo"
  disabilitato = false
  testoStatoBottone = ""

  constructor() { }

  ngOnInit(): void {
  }

  onPremuto() {
    const t = prompt('Inserisci titolo', this.titolo)
    if (t) {
      this.titolo = t
    } else {
      this.titolo = ""
    }
    this.posts.push({
      titolo: this.titolo,
      testo: '',
      commenti: []
    })
    console.log(...this.posts)
  }

  onLoading() {
    this.disabilitato = true
    this.testoStatoBottone = "loading..."

    setTimeout(()=> {
      this.disabilitato = false
      this.testoStatoBottone = ""
    },2000)
  }



  // 1) bottone Accendi: premendo si deve disabilitare
  // 2) quando è disabilitato deve apparire la scritta Loading (Accendi loading...)
  // 3) dopo 2 secondi deve tornare nella condizione precedente (solo Accendi)


}
