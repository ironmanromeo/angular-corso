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
    const message:any = prompt()
    this.title = message
  }

}
