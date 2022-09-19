
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  titolo = "Mio titolo"
  disabilitato = false
  bottone = "Accendi"

  constructor() { }

  ngOnInit(): void {
  }

  onPremuto() {
    const t = prompt("Inserisci titolo", this.titolo)
    if (t){
      this.titolo = t
    } else {
      this.titolo = ""
    }
  }

  onAct(){
    this.disabilitato= true;
    const bottone = "Accendi";
    setInterval(()=>{
      this.disabilitato= false;
      this.bottone = "Loading";
    },1000)
    this.bottone = "Accendi";
  }

}
