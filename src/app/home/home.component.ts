import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLogged = false

  //testoBottone = "Non loggato"

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  onVaiAProdotto() {
    const path = this.isLogged ? "/admin" : "prodotti"
    this.router.navigate([path])
  }

  changeLogginStatus() {
    this.isLogged = !this.isLogged
  }

  get testoBottone() {
    return this.isLogged ? "Loggato" : "Non loggato"
  }

  changeLogginStatus2() {
    this.isLogged = !this.isLogged
  }
}
