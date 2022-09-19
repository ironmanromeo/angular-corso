import { Component, Input, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

  onPremuto(){
    const nomePost = prompt("inserisci titolo post")
    if(nomePost){
      const newPost:Post = {
        titolo:nomePost,
        testo:"test",
        commenti:[]
      } 

      this.posts.push(newPost)
    }
  }

  getPostsString(){
    return JSON.stringify(this.posts)
  }
}
