import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nome = "Pippsrofkjsadofjosòdlo"
  data = Date()
  isLogged = false
  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  onVaiAProdotto() {
    this.router.navigate(["/prodotti"])
  }
}
