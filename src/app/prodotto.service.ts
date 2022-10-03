import { Injectable } from '@angular/core';
import { Prodotto } from './dati/prodotto.data';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {

  private _prodotti: Prodotto[] = [
    {codice:"001", nome:"Prodotto 1", slug: "prod1", prezzo: 1000, foto:""},
    {codice:"002", nome:"Prodotto 2", slug: "prod2", prezzo: 1000, foto:""},
    {codice:"003", nome:"Prodotto 3", slug: "prod3", prezzo: 1000, foto:""}
  ]

  private _carrello: Prodotto[] = []

  aggiungiCarrello(prodotto: Prodotto) {
    this._carrello.push(prodotto)
  }

  togliCarrello(prodotto: Prodotto) {
    this._carrello = this._carrello.filter(p => p !== prodotto)
  }

  get prodotti() {
    return [...this._prodotti]
  }

  get carello() {
    return [...this._carrello]
  }

  cercaProdotto(slug: string) {
    return this._prodotti.find(p => p.slug === slug)
  }

  constructor() { }
}
