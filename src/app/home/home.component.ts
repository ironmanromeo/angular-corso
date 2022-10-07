import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { count, Observable, Subscribable, Subscription } from 'rxjs';
import { ProdottoService } from '../prodotto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private subscription?: Subscription
  nome = "Pippo"

  constructor(private router: Router, private prodService: ProdottoService) {
  }

  ngOnInit(): void {
    this.subscription = this.prodService.observable.subscribe({
        next: count => {
          console.log(count);
        },
        error: error => {
          console.log(error);
        },
        complete: () => {
          console.log("complete");
        }
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

  onVaiAProdotto() {
    this.router.navigate(["/prodotti"])
  }
}
