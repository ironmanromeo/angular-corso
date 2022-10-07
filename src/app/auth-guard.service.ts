import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  loggedIn = false

  constructor(private router:Router) { }

  isAuthenticated() {
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn)
      }, 100)
    })
  }

  login() {
    this.loggedIn = true
    this.router.navigate(['/admin'])
  }
  
  logout() {
    this.loggedIn = false
    this.router.navigate(['/login'])
  }

}
