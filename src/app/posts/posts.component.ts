import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  titolo:String
  disabilitato = false

  constructor() { 
   
  }

  ngOnInit(): void {
  }

  onPremuto(){
    const tit = prompt("inserisci titolo")
    

  }

}
