import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

isLogged=false

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onVaiAProducts() {
    if (this.isLogged){
      this.router.navigate(['/admin'])
    }else{
      this.router.navigate(['/prodotti'])
    }
  }

  changeLogginStatus(){
    this.isLogged= !this.isLogged
  }

}
