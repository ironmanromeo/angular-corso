import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Prodotto } from '../dati/prodotto.data';
import { ProdottoService } from '../prodotto.service';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent implements OnInit {
  prodotto ?: Prodotto
  subscription ?: Subscription

  constructor(private router: Router, private route: ActivatedRoute, private service: ProdottoService) {
    const { slug } = route?.snapshot?.params ?? {}
    this.prodotto = service.cercaProdotto(slug)

    this.subscription = route.params.subscribe( params => {
      console.log("Parametri sub", params);
      const { slug } = params
      this.prodotto = service.cercaProdotto(slug)
    })
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

  onGoProduct2() {
    this.router.navigate(["/prodotti/prod2"])
  }
}
