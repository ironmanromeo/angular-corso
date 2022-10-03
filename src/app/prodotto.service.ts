import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { __spreadArray } from 'tslib';
=======
>>>>>>> origin/main
import { Prodotto } from './dati/prodotto.data';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {

<<<<<<< HEAD
  private _prodotti: Prodotto[] = [
    { codice: "001", nome: "prodotto1", prezzo: 100, foto: "" },
    { codice: "002", nome: "prodotto2", prezzo: 200, foto: "" },
    { codice: "003", nome: "prodotto3", prezzo: 300, foto: "" }
  ]

  private _carrello: Prodotto[] = []

  aggiungiACarrello(prodotto: Prodotto) {
    this._carrello.push(prodotto)
  }

  togliDaCarrello(prodotto: Prodotto) {
=======
  private _prodotti :Prodotto[] = [
    {codice:"001",nome:"prodotto1",prezzo:100,foto:""},
    {codice:"002",nome:"prodotto2",prezzo:200,foto:""},
    {codice:"003",nome:"prodotto3",prezzo:300,foto:""}
  ]

  private _carrello :Prodotto[] = []

  aggiungiACarrello(prodotto:Prodotto) {
    this._carrello.push(prodotto)
  }

  togliDaCarrello(prodotto:Prodotto) {
>>>>>>> origin/main
    this._carrello = this._carrello.filter(p => p !== prodotto)
  }

  get prodotti() {
    return [...this._prodotti]
  }

  get carrello() {
    return [...this._carrello]
  }

  constructor() { }
}
