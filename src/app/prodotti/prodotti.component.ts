import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prodotto } from '../dati/prodotto.data';
import { ProdottoService } from '../prodotto.service';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent implements OnInit {

<<<<<<< HEAD
  prodotti: Prodotto[] = []
  constructor(private prodottoService: ProdottoService) {
    this.prodotti = this.prodottoService.prodotti
  }

=======
  prodotti :Prodotto[] = []
  constructor(private router: Router,private prodottoService :ProdottoService) {
    this.prodotti = this.prodottoService.prodotti
   }
>>>>>>> origin/main
  ngOnInit(): void {
  }



}
