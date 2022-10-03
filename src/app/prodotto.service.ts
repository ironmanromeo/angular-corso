import { Injectable } from '@angular/core';
import { Prodotto } from './dati/prodotto.data'

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {
  private _prodotti: Prodotto[] = [
    {codice:"001", nome:"prodotto1", foto:"img1.png", prezzo:100},
    {codice:"002", nome:"prodotto2", foto:"img2.png", prezzo:1000},
    {codice:"003", nome:"prodotto3", foto:"img3.png", prezzo:1500}
  ]
  private _carrello: Prodotto[] = []

  aggiungiacarrello(prodotto: Prodotto){
    this._carrello.push(prodotto)
  }

  toglidaacarrello(prodotto: Prodotto){
    this._carrello= this._carrello.filter(p => { 
      p !== prodotto
    })
  }

  get prodotti(){
    return [...this._prodotti]
  }
  get carrello(){
    return [...this._carrello]
  }


  constructor() { }
}
