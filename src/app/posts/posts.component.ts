import { Component, OnInit } from '@angular/core';

import { Post } from '../dati/posts.data'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = []

  titolo = ""

  constructor() { }

  onModificatoInput(e: Event){
    const mioInput = <HTMLInputElement>e.target
    this.titolo = mioInput.value
  }

 

   aggiungiPost(){
      const titolo_post = this.titolo
      const newPost: Post = {
        titolo: titolo_post,
        testo: "testo",
        commenti: [] 
      }
      this.posts.push(newPost)
      this.titolo = ""
    }
  

  ngOnInit(): void {
  }

}




