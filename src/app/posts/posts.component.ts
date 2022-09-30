import { HtmlTagDefinition } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Post } from '../data/posts.data'
=======
import { Post } from '../dati/posts.data'


>>>>>>> origin/main
@Component({
  selector: ".app-posts",
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:Post[] = []
<<<<<<< HEAD
  
  title = "Posts"
  text = "Insert text"
=======

  titolo = "Mio titolo"
  testo = "Mio testo"
>>>>>>> origin/main

  constructor() { }

  ngOnInit(): void {
  }

<<<<<<< HEAD
  createPost() {
    const postTitle = this.title
    const textInput = this.text

    if(postTitle) { 

      const newPost:Post = {
        title: postTitle,
        text: textInput,
        comments: ["comment1","comment2"]
      }

      this.posts.push(newPost)
    }

    this.title = ""
    this.text = ""
  }

  disableButton() {
    return !this.title || !this.text
  }

  onEditedInput(e: Event) {
    const myInput = <HTMLInputElement>e.target
    this.title = myInput.value
  }

  onTextInput(e: Event) {
    const textInput = <HTMLInputElement>e.target
    this.text = textInput.value
  }

  // getPostsString() {
  //   return JSON.stringify(this.posts)
  // }
  
=======
  onPremuto() {
    const nomePost = this.titolo
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

>>>>>>> origin/main
}
