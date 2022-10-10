import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { Prodotto } from '../dati/prodotto.data';
import { ProdottoService } from '../prodotto.service';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent implements OnInit, OnDestroy {

  private intervalSubscription?: Subscription
  private prodottiSubscription?: Subscription
  ricerca = ""
  prodotti :Prodotto[] = []

  constructor(private router: Router,private prodottoService :ProdottoService) {
    this.prodotti = this.prodottoService.prodotti
   }

  ngOnInit(): void {
    this.intervalSubscription = interval(1000).subscribe( count => {
      console.log(count);
    })
    this.prodottiSubscription = this.prodottoService.emitter.subscribe( prods => {
      this.prodotti = prods
    })
  }

  ngOnDestroy(): void {
    this.intervalSubscription?.unsubscribe()
  }

  aggiungiProdotti() {
    this.prodottoService.aggiungiProdotti()
    }

}
