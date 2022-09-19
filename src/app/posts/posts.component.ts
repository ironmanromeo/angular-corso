import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  titolo = "Mio titolo"
  disabilitato = false
  desc = "Accendi"
  constructor() {

   }

  ngOnInit(): void {
  }

  onPremuto() {
   
   
    
  }

  onLoading(){
    this.disabilitato=true
    this.desc="Loading"
    setTimeout(()=>{
      this.disabilitato=false
      this.desc="Accendi"
    },2000)
  }

}


