import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLogged = false

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
    return this.isLogged ? "Loggato" : "Non Loggato"
  }


}
