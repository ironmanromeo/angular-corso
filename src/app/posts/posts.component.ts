
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  titolo = "mio titolo"
  disabilitato = false
  constructor() { }

  ngOnInit(): void {
  }

  onPremuto(){
    alert("Ci sono!")
  }

}
