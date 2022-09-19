import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  status = false
  current= ""
  constructor() { }

  ngOnInit(): void {
  }

  onPremuto() {
    this.status=true
    this.current = "loading.."
    setTimeout(()=>{
      this.status=false
      this.current = "loading.."
    }, 2000)
  }

}
