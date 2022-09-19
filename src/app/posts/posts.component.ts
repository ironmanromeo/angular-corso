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
  nomeBottone = "Accendi"

  constructor() { }

  ngOnInit(): void {
  }

  onPremuto() {
    const nomePost = prompt("Inserisci nuovo post")
    if (nomePost) {
      const newPost:Post = {
        titolo:nomePost,
        testo:"Test",
        commenti:[]
      }
      this.posts.push(newPost)
    }
  }

  getPostsString() {
    return JSON.stringify(this.posts)
  }

}
