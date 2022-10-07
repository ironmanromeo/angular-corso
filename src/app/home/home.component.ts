import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ProdottoService } from '../prodotto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {

  private subscription?: Subscription

  constructor(private router: Router, private prodottoService: ProdottoService) { 
  }

  ngOnInit(): void {
    this.subscription = this.prodottoService.observable.subscribe({
      next: count => {
        console.log(count);
      },
      error: error => {
        console.log(error);
      },
      complete: () => {
        console.log("complete");
        
      }

    })
  }

  ngOnDestroy(): void {
     this.subscription?.unsubscribe()
  }

  onGoProducts(){
    this.router.navigate(["/prodotti"])
  }

}
