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


  constructor(private prodottoservice: ProdottoService) {
    this.prodotti = this.prodottoservice.prodotti
  }

  ngOnInit(): void {
    this.intervalSubscription = interval(1000).subscribe( count => {
      console.log(count);
    })
  }

  ngOnDestroy(): void {
    this.intervalSubscription?.unsubscribe()
  }

}
