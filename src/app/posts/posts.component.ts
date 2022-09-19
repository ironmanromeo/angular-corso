import { Component, OnInit } from '@angular/core';
import { timeInterval, timeout } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  titolo = "Mio titolo"
  disabilitato = false
  disabilita = false
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

  onClick() {
    this.bottone = "Loading..."
    this.disabilita = true

    setTimeout(() => {
      this.bottone = "Accendi"
      this.disabilita = false
    }, 2000)
  }

}
