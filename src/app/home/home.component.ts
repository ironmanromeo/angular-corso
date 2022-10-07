import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {

  private subscription?: Subscription

  constructor(private router: Router, private prodService: ProdottoService) {
  }

  ngOnInit(): void {
    subscription = this.prodService.observable.subscribe(count => {
      console.log(count);
    })
  }

  ngOnDestroy(): void {
      this.subscription?.unsubscribe()
  }

  onVaiAProdotto() {
    this.router.navigate(["/prodotti"])
  }
}
