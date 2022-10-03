import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prodotto } from '../dati/prodotto.data';
import { ProdottoService } from '../prodotto.service';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent implements OnInit {

  slug: string = "";
  prodotto ?: Prodotto

  constructor(private route:ActivatedRoute, private prodottoService:ProdottoService) {
    console.log(route)
    const { slug:slugTemp } = route?.snapshot?.params ?? {}
    //const slug = route.snapshot.params["slug1"]
    this.slug = slugTemp
    this.prodotto = prodottoService.cercaProdotto(slugTemp)
  }

  ngOnInit(): void {
  }

}
