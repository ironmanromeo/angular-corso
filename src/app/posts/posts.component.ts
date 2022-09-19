import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  titolo = "Mio titolo"
  disabilitato = false
  bottoneAccendiTesto = "Accendi"

  constructor() { }

  ngOnInit(): void {
  }

  onPremuto() {
    const t = prompt('Inserisci titolo', this.titolo)
    if (t) {
      this.titolo = t
    } else {
      this.titolo = ""
    }
  }

  onAccendi() {
    this.disabilitato = true
    this.bottoneAccendiTesto = 'Loading'
    setTimeout(() => {
      this.bottoneAccendiTesto = 'Accendi'
      this.disabilitato = false
    }, 2000)
  }
}
