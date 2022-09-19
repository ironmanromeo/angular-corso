import { Component, OnInit } from '@angular/core';
import { Post } from '../dati/posts.data';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:Post[]=[]

  titolo:string = "Mio titolo"
  disabilitato = false
  testoStatoBottone = ""

  constructor() { }

  ngOnInit(): void {
  }

  aggiungiPost(){
    const title=prompt("Titolo")
    const scritta = prompt("aggiungi post")
    if(scritta && title){
      const addPost:Post={
        titolo:title,
        testo:scritta,
        commenti:[]
      }
      this.posts.push(addPost)
    }
  }

  getPostsString(){
    return JSON.stringify(this.posts)
  }

}
