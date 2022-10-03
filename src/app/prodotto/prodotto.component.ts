import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prodotto } from '../dati/prodotto.data';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent implements OnInit {

  slug :string = ""
  prodotto?: Prodotto

  constructor(private route: ActivatedRoute) {
    console.log(route)
    const {slug:slugTemp} = route?.snapshot?.params ?? {}
    this.slug = slugTemp
    
   }

  ngOnInit(): void {
  }

}
