import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  title = "Mio Titolo"
  disabled = false

  constructor() { }

  ngOnInit(): void {
  }

  onPressed() {
    const t = prompt("Insert title")
    
    if(t) {
      this.title = t
    } else {
      this.title = ""
    }
  }
}
