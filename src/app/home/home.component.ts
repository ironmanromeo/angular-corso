import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.prodService.observable.subscribe
  }

  onVaiAProdotto() {
    this.router.navigate(["/prodotti"])
  }
}
