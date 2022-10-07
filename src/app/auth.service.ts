import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged = false

  constructor() { }

  login(){
    this.isLogged = true
  }

  logout(){
    this.isLogged = false
  }

  isAutenticated(){
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLogged)
      }, 1000)
    })

    return promise
  }

}
