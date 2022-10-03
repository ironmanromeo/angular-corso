import { Component, OnInit } from '@angular/core';
import { ProdottoService } from '../prodotto.service';
import { Prodotto } from '../dati/prodotto.data';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent implements OnInit {

  prodotti:Prodotto[] = []

  constructor(private prodottoService:ProdottoService) {
    this.prodotti = prodottoService.prodotti
    console.log(this.prodotti)
  }

  ngOnInit(): void {
  }

}
