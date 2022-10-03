import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _isLogged = false

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    
  }

  get isLogged() {
    return this._isLogged
  }

  set isLogged(isLogged:boolean) {
    this._isLogged = isLogged
  }

  get testoBottone() {
    return this.isLogged ? "Logout" : "Login"
  }

  onVaiAProdotto() {
    const path = this.isLogged ? "/admin" : "/prodotti"
    this.router.navigate([path])
  }

  changeLogginStatus() {
    this.isLogged = !this.isLogged
  }
  
  changeLogginStatus2() {
    this._isLogged = !this._isLogged
  }

}
