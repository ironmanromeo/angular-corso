<<<<<<< HEAD
import { Component, forwardRef, OnInit } from '@angular/core';
import { Post } from '../dati/posts.data';
=======
import { Component, OnInit } from '@angular/core';
import { Post } from '../dati/posts.data'

>>>>>>> origin/main

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:Post[] = []

  titolo = "Mio titolo"
  disabilitato = false
  disabilita = false
  bottone = "Accendi"

  constructor() { }

  ngOnInit(): void {
  }

  onPremuto() {
    const nomePost = prompt("Inserisci nuovo post")
<<<<<<< HEAD
    if(nomePost) {

      const newPost:Post = {
        titolo: nomePost,
        testo: "Test",
        commenti: []
      }

=======
    if (nomePost) {
      const newPost:Post = {
        titolo:nomePost,
        testo:"Test",
        commenti:[]
      }
>>>>>>> origin/main
      this.posts.push(newPost)
    }
    
  }

  getPostsString() {
    return JSON.stringify(this.posts)
  }

  getPostsString() {
    return JSON.stringify(this.posts)
  }

}
