import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  title = "Mio Titolo"
  disabled = false
  loading = "Accendi"

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

  onAccensione() {
    this.disabled = true
    this.loading = "Loading"

    if(this.disabled == true) {
      setInterval(() => {
        this.loading = "Accendi"
        this.disabled = false
      }, 2000)
    }
  }
  
}
