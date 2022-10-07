import { Injectable } from '@angular/core';
import { observable } from 'rxjs';
import { Prodotto } from './dati/prodotto.data'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _prodotti :Prodotto[]=[
    {codice:"001",nome:"prodotto1",categoria:1,prezzo:100,slug:"prod1",foto:""},
    {codice:"002",nome:"prodotto2",categoria:2,prezzo:200,slug:"prod2",foto:""},
    {codice:"003",nome:"prodotto3",categoria:3,prezzo:300,slug:"prod3",foto:""},
    {codice:"004",nome:"prodotto1",categoria:4,prezzo:100,slug:"prod4",foto:""},
    {codice:"005",nome:"prodotto2",categoria:5,prezzo:200,slug:"prod5",foto:""}
    
  ]
  public observable:Observable< number >
  constructor() { 
    
    this.observable = new observable (subscribe =>{
      let count=0
      setInterval(()=>{
       
        subscribe.next(count)
        count++
        if (count>=5){
          subscribe.complete()
        }
      })
    })
  }
  private _carrello :Prodotto[]=[]
 
  
  aggiungiCarrello(prodotto:Prodotto){
    this._carrello.push(prodotto)
  }
  togliCarrello(prodotto:Prodotto){
   this._carrello= this._carrello.filter(p=>p!==prodotto)
  }
  get prodotti(){
    return [...this._prodotti]
  }
  get carrello(){
    return [...this._carrello]
  }
  
}
