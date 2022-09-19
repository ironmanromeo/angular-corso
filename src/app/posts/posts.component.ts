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
    if(this.disabilitato=false){
      setTimeout(() => {
        alert("Accendi Loading")
      }, 2000);
    }else{
      this.disabilitato=true
    }
  }

  //Bottone accendi: Premendo si deve disabilitare
  //quando disabilitato deve apparire la scritta accendi loading
  //dopo due secondi normale

}
