import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Prodotto } from '../dati/prodotto.data';
import { ProdottoService } from '../prodotto.service';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent implements OnInit, OnDestroy {

  prodotto?: Prodotto
  subscription?: Subscription
  

  constructor(private route: ActivatedRoute,
              private service: ProdottoService,
              private router: Router) {
      const { slug } = route?.snapshot?.params ?? {}
      this.prodotto = service.cercaProdotto(slug) 
      
      this.subscription = route.params.subscribe(params => {
        console.log(params);
        const { slug } = params
        this.prodotto = service.cercaProdotto(slug)
      })
    }
  ngOnInit(): void {    
  }
  
  ngOnDestroy(): void {
    console.log("OnDestoy", this.prodotto);
    this.subscription?.unsubscribe()
  }

  vaiProd2(){
    this.router.navigate(["/prodotti/prod2"])
  }

}
