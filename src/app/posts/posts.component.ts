import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  titolo = "Mio titolo"
  disabilitato = false
  status="accendi"
  constructor() {
   }

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


  accendi(){
    this.disabilitato=true
    this.status="Acceso Loading"
    setTimeout(()=>{
      this.disabilitato=!this.disabilitato
      this.status="accendi"
    },2000)


  }
  

}
