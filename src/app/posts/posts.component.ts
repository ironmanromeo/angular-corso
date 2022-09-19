import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  titolo = "Mio titolo"
  disabilitato = false

  constructor() { }

  cambiaTitolo(){
    const nuovoTitolo: any = prompt()
    this.titolo = nuovoTitolo
  }

  ngOnInit(): void {
  }

}
