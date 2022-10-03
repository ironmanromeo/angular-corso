import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise <boolean> {
      return this.authService.isAuthenticated().then(authenticated => {
        if(authenticated) {
          return true
        } else {
          this.router.navigate(["/login"])
          return false
        }
      })
  }
}
