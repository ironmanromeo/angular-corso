import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  titolo = "mio titoloo"
  disabilitato = false
  constructor() { }

  ngOnInit(): void {
  }

  onPremuto(){
    this.titolo=String(prompt("hellow"))
  }

}
