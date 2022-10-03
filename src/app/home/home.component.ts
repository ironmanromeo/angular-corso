import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLogged: false

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onGoProducts() {
    this.router.navigate(['/products'])
  }

  OnVaiAProdotti() {

    const path = this.isLogged ? "/admin" : "prodotti"
    this.router.navigate([path])
  }

}
