import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  titolo = "Mio titolo"


  constructor() { }

  ngOnInit(): void {
  }

  onpremuto(){
    const ntitolo: any = prompt("Inserisci un valore")
    this.titolo = ntitolo
  }

}
