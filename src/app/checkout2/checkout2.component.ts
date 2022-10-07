import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout2',
  templateUrl: './checkout2.component.html',
  styleUrls: ['./checkout2.component.css']
})
export class Checkout2Component implements OnInit {

  checkoutForm: FormGroup

  constructor() {
    this.checkoutForm = new FormGroup({
      "firstName": new FormControl("Pippo", Validators.required),
      "lastName": new FormControl(null, Validators.required),
      "username": new FormControl(null, Validators.required),
      "email": new FormControl(null, [Validators.required, Validators.email]),
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.checkoutForm);

  }

}
