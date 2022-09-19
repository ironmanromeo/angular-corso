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
  disabilita = false
  bottone = "Accendi"

  constructor() { }

  ngOnInit(): void {
  }

  onPremuto() {
    const nomePost = this.titolo
    if (nomePost) {
      const newPost:Post = {
        titolo:nomePost,
        testo:"Test",
        commenti:[]
      }
      this.posts.push(newPost)
    }
    
    if(this.titolo === '') {
      for (let i = 0; i < 100; i++) {
        this.posts.pop()
      }
    }
    
  }

  onModificatoInput(e:Event) {
    const mioInput = <HTMLInputElement>e.target
    this.titolo = mioInput.value
  }

  getPostsString() {
    return JSON.stringify(this.posts)
  }

}
