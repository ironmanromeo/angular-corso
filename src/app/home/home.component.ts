import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nome = "Pippo Pluto e Paperino"
  miaData = new Date()
  isLogged = false
  nome = "pippo"
  //testoBottone = "Non loggato"

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  onVaiAProdotto() {
    this.router.navigate(["/prodotti"])
  }
}
