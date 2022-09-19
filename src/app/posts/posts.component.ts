import { getSafePropertyAccessString } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Post } from '../data/posts.data'
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:Post[] = []
  
  title = "Posts"
  disabled = false
  inputTxt = ""

  constructor() { }

  ngOnInit(): void {
  }

  createPost() {
    const postTitle = this.title

    if(postTitle) { 

      const newPost:Post = {
        title: postTitle,
        text: "some text",
        comments: ["comment1","comment2"]
      }

      this.posts.push(newPost)
      this.inputTxt = " "
    }
  }

  onEditedInput(e: Event) {
    const myInput = <HTMLInputElement>e.target
    this.title = myInput.value
    
  }

  getPostsString() {
    return JSON.stringify(this.posts)
  }
  
}
