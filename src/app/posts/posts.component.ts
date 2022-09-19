import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  titolo = "Mio Primo Titolo"
  constructor() { }

  ngOnInit(): void {
  }

  onClicked(){
    this.titolo=String(prompt("Inserisci dato-->","ciao"))
  }

}
