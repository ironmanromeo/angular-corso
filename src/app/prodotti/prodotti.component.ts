import { Component, OnInit } from '@angular/core';
import { Prodotto } from '../dati/prodotto.data';
import { ProdottoService } from '../prodotto.service';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  prodotti :Prodotto[] = [
    {codice: "001", nome: "prodotto 1", foto: "foto1", prezzo: 20},
    {codice: "002", nome: "prodotto 2", foto: "foto2", prezzo: 30},
    {codice: "003", nome: "prodotto 3", foto: "foto3", prezzo: 40},
  ]
}
