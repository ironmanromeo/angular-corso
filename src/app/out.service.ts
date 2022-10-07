import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OutService {

  isLogged = false

  constructor() { }

  logIn() {
    this.isLogged = true
  }

  logOut() {
    this.isLogged = false
  }

  isAutenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLogged)
      }, 100)
    })
  }
}
