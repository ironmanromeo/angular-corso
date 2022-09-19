import { Component, OnInit } from '@angular/core';
import { Post } from '../dati/posts.data'


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:Post[] = []

  titolo = ""
  disabilitato = true

  constructor() { }

  ngOnInit(): void {
  }

  onPremuto() {
    if (this.titolo) {
      const newPost:Post = {
        titolo:this.titolo,
        testo:"",
        commenti:[]
      }
      this.posts.push(newPost)
      this.titolo = ""
    }
  }

  onModificatoInput(e:Event) {
    // const mioInput = e.target as HTMLFormElement
    const mioInput = <HTMLInputElement>e.target
    this.titolo = mioInput.value
    if (this.titolo) {
      this.disabilitato = false
    } else {
      this.disabilitato = true
    }
  }

  getPostsString() {
    return JSON.stringify(this.posts)
  }

}
