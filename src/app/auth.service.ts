import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged = false

  constructor(private router : Router) { }

  logIn() {
    this.isLogged = true
    this.router.navigate(["/admin"])
  }

  logOut() {
    this.isLogged = false
    this.router.navigate(["/log-in"])
  }

  isAutenticated() {
    const promise = new Promise<boolean>((resolve, reject) => {
      if (this.isLogged){
        resolve(this.isLogged)
      } else {
        setTimeout(()=> {
          resolve(this.isLogged)
         } , 500)
      }
    })
    return promise
  }
}
