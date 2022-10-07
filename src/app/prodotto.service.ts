import { Injectable } from '@angular/core';
import { Prodotto } from './dati/prodotto.data';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {

  private _prodotti: Prodotto[] = [
    {codice:"001", nome:"Prodotto 1", categoria: 1, slug: "prod1", prezzo: 100, foto:""},
    {codice:"002", nome:"Prodotto 2", categoria: 2, slug: "prod2", prezzo: 200, foto:""},
    {codice:"003", nome:"Prodotto 3", categoria: 1, slug: "prod3", prezzo: 300, foto:""},
    {codice:"004", nome:"Prodotto 4", categoria: 2, slug: "prod4", prezzo: 400, foto:""},
    {codice:"005", nome:"Prodotto 5", categoria: 1, slug: "prod5", prezzo: 500, foto:""},
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
