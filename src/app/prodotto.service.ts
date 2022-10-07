import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Prodotto } from './dati/prodotto.data';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {

  private _prodotti: Prodotto[] = [
    {codice: "001", nome: "prodotto1", categoria:1, slug:"prod1", foto: "", prezzo: 100},
    {codice: "002", nome: "prodotto2", categoria:2, slug:"prod2", foto: "", prezzo: 100},
    {codice: "003", nome: "prodotto3", categoria:3, slug:"prod3", foto: "", prezzo: 100},
    {codice: "004", nome: "prodotto4", categoria:4, slug:"prod4", foto: "", prezzo: 100},
    {codice: "005", nome: "prodotto5", categoria:5, slug:"prod5", foto: "", prezzo: 100}
  ]
  private _carrello: Prodotto[] = []
  public observable: Observable<number>


  constructor() { 
    this.observable = new Observable( subscribe => {
      let count = 0
      setInterval(() => {
        subscribe.next(count)
        count++
      }, 1000)
    })
  }


  aggiungiCarrello(prodotto: Prodotto){
    this._carrello.push(prodotto)
  }

  togliCarrello(prodotto: Prodotto){
    this._carrello = this._carrello.filter(p => p !== prodotto)
  }

  cercaProdotto(slug: string){
    return this._prodotti.find(p => p.slug === slug)
  }

  get prodotti(){
    return [...this._prodotti]
  }

  get carrello(){
    return [...this._carrello]
  }
}
