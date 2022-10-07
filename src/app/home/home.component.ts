import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ProdottoService } from '../prodotto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private subscription?: Subscription
  constructor(private router: Router, private prodService: ProdottoService) {
    prodService
  }

  ngOnInit(): void {
      this.subscription = this.prodService.observable.subscribe(count =>{
      console.log(count)
    })
  }

  onVaiAProdotto() {
    this.router.navigate(["/prodotti"])
  }
}
