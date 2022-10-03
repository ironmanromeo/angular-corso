import { Injectable } from '@angular/core';
import { Prodotto } from './dati/prodotto.data';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {
  _prodotti: Prodotto[] = []
  _carrello : Prodotto[] = []
  aggiungiACarrello(prod:Prodotto){
    this.carrello.push(prod)
  }

  togliDaCarrello(prod:Prodotto){
    this.carrello.filter(p => p!= prod)
  }
  constructor() { }

  get prodotti(){
    return [...this._prodotti]
  }
  get carrello(){
    return [...this._carrello]
  }
}
