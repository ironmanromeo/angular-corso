import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged:boolean = false

  constructor() { }

  login(){
    this.isLogged=true
  }

  logout(){
    this.isLogged=false
  }

  isAuthenticated(){
    const promise = new Promise<boolean>((resolve,reject)=>{
      setTimeout(() => {
        resolve(this.isLogged)
      }, 500);
    })
    return promise
  }
}
