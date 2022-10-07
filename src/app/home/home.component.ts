import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _isLogged = false

  nome = "Il grandissimo Pippo"

  miaData = new Date()

  //testoBottone = "Non loggato"

  //testoBottone = "Non loggato"

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    
  }

  onVaiAProdotto() {
    this.router.navigate(["/prodotti"])
  }
}
