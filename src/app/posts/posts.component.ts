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
    const t = <HTMLInputElement>document.getElementById('titolo_input')
    t.value = ""
  }

  onModificaInput(e:Event){
    const mioInput = <HTMLInputElement>e.target
    this.titolo = mioInput.value
  }

  getPostsString() {
    return JSON.stringify(this.posts)
  }

}
