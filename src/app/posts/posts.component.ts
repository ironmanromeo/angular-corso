import { Component, OnInit } from '@angular/core';
import { Post } from '../dati/posts.data';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:Post[]=[]

  titolo = "Mio titolo"
  disabilitato = false
  constructor() { }

  ngOnInit(): void {
  }

  onPremuto() {
    const nomePost = prompt("Inserisci nuovo post")
    if (nomePost){
      const newPost:Post = {
        titolo:nomePost,
        testo:"Testo",
        commenti:[]
      }
        this.posts.push(newPost)
      }
  }

  }



  // 1) bottone Accendi: premendo si deve disabilitare
  // 2) quando è disabilitato deve apparire la scritta Loading (Accendi loading...)
  // 3) dopo 2 secondi deve tornare nella condizione precedente (solo Accendi)


