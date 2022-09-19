import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  titolo = "Mio titolo"
  disabilitato = false

  constructor() { }

  ngOnInit(): void {
  }

  onPremuto(){
    const t =prompt("inserisci titolo", this.titolo)
    if(t){
      this.titolo = t
    }else{
      this.titolo = ""
    }
  }

}
