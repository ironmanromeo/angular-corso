import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Prodotto } from '../dati/prodotto.data';
import { ProdottoService } from '../prodotto.service';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent implements OnInit {


private intervalSubscription: Subscription

  test = new Promise((resolve,reget) => {
    setTimeout( () => {
  resolve("Pippo")
    },2000)
  })
  ricerca = ""
  prodotti :Prodotto[] = []
  constructor(private router: Router,private prodottoService :ProdottoService) {
    this.prodotti = this.prodottoService.prodotti
   }
  ngOnInit(): void {
  }

  



}
