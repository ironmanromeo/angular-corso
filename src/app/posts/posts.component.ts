import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  titolo = "Mio titolo"
  disabilitato = false
  testoStatoBottone = "ciaoo"

  constructor() { }

  ngOnInit(): void {
  }

  onPremuto() {
   
   
    
  }


  onLoading() {
    this.disabilitato = true
    this.testoStatoBottone = "loading..."

    setTimeout(()=> {
      this.disabilitato = false
      this.testoStatoBottone = ""
    },2000)
  }



  // 1) bottone Accendi: premendo si deve disabilitare
  // 2) quando è disabilitato deve apparire la scritta Loading (Accendi loading...)
  // 3) dopo 2 secondi deve tornare nella condizione precedente (solo Accendi)


}


