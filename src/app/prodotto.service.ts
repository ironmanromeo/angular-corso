import { Injectable } from '@angular/core';
import { Prodotto } from './dati/prodotto.data';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {

  private _prodotti :Prodotto[] = [
    {codice:"001",nome:"prodotto 1",slug:"prod1",prezzo:100,foto:""},
    {codice:"002",nome:"prodotto 2",slug:"prod2",prezzo:200,foto:""},
    {codice:"003",nome:"prodotto 3",slug:"prod3",prezzo:300,foto:""},
    {codice:"004",nome:"prodotto 4",slug:"prod4",prezzo:300,foto:""},
    {codice:"005",nome:"prodotto 5",slug:"prod5",prezzo:300,foto:""}

  ]

  private _carrello :Prodotto[] = []

  aggiungiACarrello(prodotto:Prodotto) {
    this._carrello.push(prodotto)
  }

  togliDaCarrello(prodotto:Prodotto) {
    this._carrello = this._carrello.filter(p => p !== prodotto)
  }

  cercaProdotto(slug: string) {
    return this._prodotti.find(p => p.slug === slug)
  }

  get prodotti() {
    return [...this._prodotti]
  }

  get carrello() {
    return [...this._carrello]
  }

  constructor() { }
}
