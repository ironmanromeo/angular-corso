import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nome= "pippociaoaaaa"
  miadata= new Date()
  isLogged = false

  //testoBottone = "Non loggato"

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  onVaiAProdotto() {
    this.router.navigate(["/prodotti"])
  }
}
