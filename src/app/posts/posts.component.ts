import { Component, OnInit } from '@angular/core';

import { Post } from '../dati/posts.data'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = []

  titolo = "Mio titolo"
  disabilitato = false
  disabilitato_accendi = false

  constructor() { }

  aggiungiPost(){
    const titolo_post = prompt("Inserisci un titolo al post")
    const testo_post = prompt("Inserisci un testo al post")
    const commento_post = prompt("Inserisci un commento al post")

    if(titolo_post != null && testo_post != null && commento_post != null){

      const newPost: Post = {
        titolo: titolo_post,
        testo: testo_post,
        commenti: [commento_post] 
      }

      this.posts.push(newPost)

    }
  }

  ngOnInit(): void {
  }

}




