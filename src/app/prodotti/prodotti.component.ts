import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prodotto } from '../dati/prodotto.data';
import { ProdottoService } from '../prodotto.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent implements OnInit {
  testoAsync = new Promise((resolve, reject)=> {
    setTimeout(() => {
      resolve("Pippo")
    }, 2000);
    
  }) 
  private intervalSubscription?: Subscription
  ricerca = ""
  prodotti :Prodotto[] = []
  constructor(private router: Router,private prodottoService :ProdottoService) {
    this.prodotti = this.prodottoService.prodotti
    
   }
  ngOnInit(): void {
    this.intervalSubscription=interval(1000).subscribe( count => {
      console.log(count);
    } )
  }

  ngDestroy(): void{
    this.intervalSubscription?.unsubscribe()

  }
  



}
