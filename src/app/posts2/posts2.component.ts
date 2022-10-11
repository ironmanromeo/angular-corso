import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post2 } from '../dati/post.data';

@Component({
  selector: 'app-posts2',
  templateUrl: './posts2.component.html',
  styleUrls: ['./posts2.component.css']
})
export class Posts2Component implements OnInit {

  posts: Post2[] = []

  constructor(private http: HttpClient) {

   }

  ngOnInit(): void {
    this.http.get<Post2[]>("https://jsonplaceholder.typicode.com/posts").subscribe(result => {
      this.posts = result
    })
  }


}
