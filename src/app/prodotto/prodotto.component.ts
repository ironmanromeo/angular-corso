import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Prodotto } from '../dati/prodotto.data';
import { ProdottoService } from '../prodotto.service';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent implements OnInit, OnDestroy {
  ricerca =""
  prodotto?:Prodotto
  subscription?:Subscription

  constructor(private route: ActivatedRoute, private prodottoService:ProdottoService, private router :Router) {
    console.log(route);
    const { slug } = route?.snapshot?.params ?? {}
    //const slug = route.snapshot.params["slug"]
    this.prodotto = prodottoService.cercaProdotto(slug)

    this.subscription = route.params.subscribe(params => {
      console.log("Parametri subscribe: ", params);
      const { slug } = params
      this.prodotto = prodottoService.cercaProdotto(slug)
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log("on destroy", this.prodotto);
    this.subscription?.unsubscribe()
  }

  vaiAProdotto2() {
    this.router.navigate(["/prodotti/prod2"])
  }

}
