import { Component, OnDestroy, OnInit, Pipe } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { count, Observable, pipe, Subscription } from 'rxjs';
import { ProdottoService } from '../prodotto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit, OnDestroy {

  private subscription?: Subscription



  constructor(private router: Router, private prdoserv: ProdottoService) {


  }

  ngOnInit(): void {
    this.subscription = this.prdoserv.observable.subscribe({
        next: count => {
          console.log(count);
        },
        error: error => {
          console.log(error);

        },
        complete: ()=> {
          console.log("complete");

        }
    })
  }
  ngOnDestroy(): void {
      this.subscription?.unsubscribe()
  }

  onVaiAProdotto() {
    this.router.navigate(["/prodotti"])
  }
}
