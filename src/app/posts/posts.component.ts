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
  testo = ""

  constructor() { }

  onModificatoInput(e: Event){
    const mioInput = <HTMLInputElement>e.target
    this.titolo = mioInput.value
  }

  bottoneDisabilitato(){
    return !this.titolo || !this.testo
  }

   aggiungiPost(){
      const newPost: Post = {
        titolo: this.titolo,
        testo: this.testo,
        commenti: [] 
      }
      this.posts.push(newPost)
      this.titolo = ""
      this.testo = ""
    }
  

  ngOnInit(): void {
  }

}




