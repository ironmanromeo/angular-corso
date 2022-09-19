import { Component, OnInit } from '@angular/core';
import { Post } from '../dati/posts.data'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:Post[] = []

  constructor() { }

  ngOnInit(): void {
  }

  onPremuto() {
    const nomePost = prompt('Inserisci titolo del nuovo post')
    if (nomePost) {
      const newPost:Post = {
        titolo: nomePost,
        testo: '',
        commenti: []
      }
      this.posts.push(newPost)
    } else {
      
    }
  }

  getPostsString() {
    if (this.posts[0]) {
          return JSON.stringify(this.posts)
    } else {
      return 'Nessun post'
    }
  }
}
