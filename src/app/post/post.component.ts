import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input("ti") titolo = "Mio Titolo"

  constructor() { }

  ngOnInit(): void {
  }
}
