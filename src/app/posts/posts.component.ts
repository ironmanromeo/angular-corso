import { Component, OnInit } from '@angular/core';
import { Post } from '../dati/posts.data'


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:Post[] = []

  titolo = "Mio Titolo"
 

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
      this.titolo=""
     
    }
  }

  onModificatoinput(e:Event){
    
    const mioinput =<HTMLInputElement>e.target 
    this.titolo= mioinput.value

  }

  getPostsString() {
    //return JSON.stringify(this.posts)     
  }

}
