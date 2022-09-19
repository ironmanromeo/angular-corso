import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  titolo = "Mio titolo"
  disabilitato = false
  testoBottone="Accendi"

  constructor() { }

  ngOnInit(): void {
  }

  onPremuto() {
    this.disabilitato=true
    this.testoBottone="Accendi loading"
    setTimeout(() => {
      this.testoBottone="Accendi"
      this.disabilitato=false
    }, 2000);


  }

}
