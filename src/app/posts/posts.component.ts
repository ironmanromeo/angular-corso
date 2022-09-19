import { Component, OnInit } from '@angular/core';
import { Post } from '../dati/posts.data'
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:Post[]=[]
  
  constructor() { }

  ngOnInit(): void {
  }

  onPremuto() {
    var titolo:string=String(prompt("Dimmi il titolo uaglioo"))
    var testo:string=String(prompt("Dimmi il testo uaglioo"))
    var commenti:string[]=[];
    var n
    while(!n){
    var commento:string=String(prompt("Dimmi il commento uaglioo"))
    if(commento!="")
     commenti.push(commento)
    else
      break
    }
    this.posts.push({titolo, testo, commenti})
  }

}
