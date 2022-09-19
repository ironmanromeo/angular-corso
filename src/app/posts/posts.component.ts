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
  mioInput = "";
  constructor() { }

  ngOnInit(): void {
  }

  onPremuto() {
    if (this.mioInput) {
      const newPost:Post = {
        titolo:this.mioInput,
        testo:"Test",
        commenti:[]
      }
      this.posts.push(newPost)
    }
  }
  onModificatoInput(e:Event){
    this.mioInput=String((<HTMLInputElement>e.target).value)
  }
  getPostsString() {
    return JSON.stringify(this.posts)
  }

}
