import { Component, OnInit } from '@angular/core';
import { Post } from '../data/posts.data'
@Component({
  selector: ".app-posts",
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:Post[] = []
  
  title = "Posts"
  text = "Insert text"

  constructor() { }

  ngOnInit(): void {
  }

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
  
}
