import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { count, Subscription } from 'rxjs';
import { ProdottoService } from '../prodotto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private subscription?:Subscription

  //testoBottone = "Non loggato"

  constructor(private router:Router, private prodService:ProdottoService) {}

  ngOnInit(): void {
    this.subscription = this.prodService.observable?.subscribe(count => {
      console.log(count)
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

  onVaiAProdotto() {
    this.router.navigate(["/prodotti"])
  }
}
