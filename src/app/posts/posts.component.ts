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
    const t =prompt("inserisci titolo", this.titolo)
    if(t){
      this.titolo = t
    }else{
      this.titolo = ""
    }
  }

  onLoading(){
    this.disabilitato = true
    setTimeout(() => {
      this.disabilitato = false
    }, 2000);
  }

  //Bottone accendi: Premendo si deve disabilitare
  //quando disabilitato deve apparire la scritta accendi loading
  //dopo due secondi normale

}
