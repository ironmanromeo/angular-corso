import { HtmlTagDefinition } from '@angular/compiler';
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
  testo = "Mio testo"

  constructor() { }

  ngOnInit(): void {
  }

  onPremuto() {
    const nomePost = this.titolo
    const testoPost = this.testo
    if (nomePost) {
      const newPost:Post = {
        titolo:nomePost,
        testo:"Test",
        commenti:[]
      }
      this.posts.push(newPost)
      this.titolo = ""
      this.testo = ""
    }
  }

  bottoneDisabilitato() {
    return !this.titolo || !this.testo
  }

  onModificatoInput(e:Event){
    //const mioInput = e.target as HTMLInputElement
    const mioInput = <HTMLInputElement>e.target
    this.titolo = mioInput.value
  }

  getPostsString() {
    return JSON.stringify(this.posts)
  }

}
