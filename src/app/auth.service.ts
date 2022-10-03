import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged = false

  constructor() { }

  logIn() {
    this.isLogged = true
  }

  logOut() {
    this.isLogged = false
  }

  isAutenticated() {
    const promise = new Promise<boolean>((resolve, reject) => {
      setTimeout(()=> {
        return(this.isLogged)
      }, 500)
    })
    return promise
  }

}
