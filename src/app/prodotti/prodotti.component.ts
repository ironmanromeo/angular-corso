import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Prodotto } from '../dati/prodotto.data';
import { ProdottoService } from '../prodotto.service';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent implements OnInit, OnDestroy {

  prodotti: Prodotto[] = []
  ricerca: string = ""

  private intervalSubscription?: Subscription
  private prodottiSubscription?: Subscription


  constructor(private prodottoservice: ProdottoService) {
    this.prodotti = this.prodottoservice.prodotti
  }

  ngOnInit(): void {
    this.intervalSubscription = interval(1000).subscribe( count => {
      console.log(count);
    })

    this.prodottiSubscription = this.prodottoservice.emitter.subscribe( prods => {
      this.prodotti = prods 
    })
  }

  ngOnDestroy(): void {
    this.intervalSubscription?.unsubscribe()
  }

  aggiungiProdotti(){
    this.prodottoservice.aggiungiProdotti()
  }

}
