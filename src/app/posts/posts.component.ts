import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  titolo:string | null = 'Mio titolo'
  disabilitato = false

  constructor() { }

  ngOnInit(): void {
  }

  onPremuto() {
    this.titolo = prompt("Inserisci nuovo titolo")
  }

}
