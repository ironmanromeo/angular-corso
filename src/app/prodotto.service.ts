import { Injectable } from '@angular/core';
import { Prodotto } from './dati/prodotto.data';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {

  private _prodotti:Prodotto[] = [
    {codice: "001", nome: "prodotto1", prezzo: 1000, foto: ""},
    {codice: "002", nome: "prodotto2", prezzo: 1000, foto: ""},
    {codice: "003", nome: "prodotto3", prezzo: 1000, foto: ""}
  ]

  private _carrello:Prodotto[] = []

  constructor() {
    console.log("ProdottoService INIZIALIZATO!")
  }

  get prodotti() {
    return [...this._prodotti]
  }

  get carrello() {
    return [...this._carrello]
  }

  aggiungiACarrello(prod:Prodotto){
    this._carrello.push(prod)
  }

  atogliDaCarrello(prod:Prodotto){
    this._carrello = this._carrello.filter(p=> p !== prod)
  }

}
