import { Injectable } from '@angular/core';

import { Prodotto } from './dati/prodotto.data';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {

  private _prodotti: Prodotto[] = [
    {codice: "001", nome: "prodotto1", foto: "", prezzo: 100},
    {codice: "002", nome: "prodotto2", foto: "", prezzo: 100},
    {codice: "003", nome: "prodotto3", foto: "", prezzo: 100}
  ]
  private _carrello: Prodotto[] = []

  aggiungiCarrello(prodotto: Prodotto){
    this._carrello.push(prodotto)
  }

  togliCarrello(prodotto: Prodotto){
    this._carrello = this._carrello.filter(p => p !== prodotto)
  }

  get prodotti(){
    return [...this._prodotti]
  }

  get carrello(){
    return [...this._carrello]
  }

  constructor() { }
}
