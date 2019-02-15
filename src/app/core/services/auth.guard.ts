import { CanActivate, CanLoad, Router, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private auth: AuthService, private router: Router) {}


  checkIfLogged() {
    const isAuth = this.auth.isLogged();
    if ( !isAuth ) {
      this.router.navigateByUrl('login');
    }
    return !!isAuth;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkIfLogged();
  }

  canLoad(route: Route): boolean {
    return this.checkIfLogged();
  }
}
