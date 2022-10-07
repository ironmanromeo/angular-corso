import { Component, OnInit, Pipe } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {

  nome = "Pippo Pluto e Paperino"
  miaData = new Date()
  isLogged = false
  miaData = new Date()

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  onVaiAProdotto() {
    this.router.navigate(["/prodotti"])
  }
}
