import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Prodotto } from './dati/prodotto.data';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {


  private _prodotti :Prodotto[] = [
    {codice:"001",nome:"prodotto 1", categoria:1, slug:"prod1",prezzo:100,foto:""},
    {codice:"002",nome:"prodotto 2", categoria:2, slug:"prod2",prezzo:200,foto:""},
    {codice:"003",nome:"prodotto 3", categoria:1, slug:"prod3",prezzo:300,foto:""},
    {codice:"004",nome:"prodotto 4", categoria:2, slug:"prod4",prezzo:400,foto:""},
    {codice:"005",nome:"prodotto 5", categoria:2, slug:"prod5",prezzo:500,foto:""}
  ]

  public emitter = new Subject<Prodotto[]>()

  private _carrello :Prodotto[] = []

  public observable: Observable<number>

  constructor() {
    this.observable = new Observable(subscribe => {
      let count = 0
      setInterval(() => {
        subscribe.next(count)
        count++
        if(count > 5) {
          subscribe.complete()
        }
        if(count > 7) {
          subscribe.error(new Error("Errore"))
        }
      }, 1000)
    })
  }

  aggiungiProdotti() {
    const nuoviProdotti = [
      {codice:"006",nome:"prodotto 6", categoria:2, slug:"prod6",prezzo:500,foto:""},
      {codice:"007",nome:"prodotto 7", categoria:2, slug:"prod7",prezzo:500,foto:""},
      {codice:"008",nome:"prodotto 8", categoria:2, slug:"prod8",prezzo:500,foto:""}
    ]

    this._prodotti = [...this._prodotti, ...nuoviProdotti]

    this.emitter.next(this._prodotti)
  }

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


}
