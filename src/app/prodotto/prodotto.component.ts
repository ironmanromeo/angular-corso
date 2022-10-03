import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prodotto } from '../dati/prodotto.data';
import { ProdottoService } from '../prodotto.service';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent implements OnInit {

  prodotto ?: Prodotto
  subscription: any;

  constructor(private route : ActivatedRoute, private service : ProdottoService, private router:Router) {
    const {slug} = route?.snapshot?.params ?? {}
    this.prodotto=service.cercaProdotto(slug)
    this.subscription=route.params.subscribe(params=>{
      const {slug}=params
      this.prodotto=service.cercaProdotto(slug)
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy():void{
    console.log("Chiamata")

  }

  goToProdotti(){
    this.router.navigate(["/prodotti"])
  }
  goToProdotto2(){
    this.router.navigate(["/prodotti/prod2"])
  }

}
