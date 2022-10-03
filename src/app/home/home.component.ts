import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  isLogged = false

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onGoProducts(){
    const path = this.isLogged ? "/prodotti" : "/admin"
    this.router.navigate([path])
  }

  changeLoginStatus(){
    this.isLogged = !this.isLogged
  }

  get testoBottone(){
    return this.isLogged ? "Loggato" : "Non loggato"
  }

}
