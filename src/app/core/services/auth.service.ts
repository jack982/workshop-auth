import { Injectable } from '@angular/core';
import { Auth } from '../model/auth';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  data: Auth;
  error: any;

  constructor(private http: HttpClient, private router: Router) { }

  login( { user, password } ) {
    this.error = null;

    const params = new HttpParams()
      .set('user', user)
      .set('password', password);

      this.http.get<Auth>(`${environment.REST_API_URL}/login`, { params })
        .subscribe(
          (res: Auth) => {
            this.data = res;
            this.saveToLocalStorage( res );
            this.router.navigateByUrl('catalog');
          },
          err => this.error = err
        );
  }

  isLogged() {
    return !!this.getTokenFromLocalStorage();
    // return this.data ? !!this.data.token : '';
  }

  logout() {
    this.data = null;
    localStorage.clear();
    this.router.navigateByUrl('login');
  }


  saveToLocalStorage( authData: Auth ) {
    if (window.localStorage) {
      window.localStorage.setItem('token', authData.token);
    }
    return null;
  }

  getTokenFromLocalStorage() {
    if ( window.localStorage ) {
      return window.localStorage.getItem('token');
    }
    return this.data.token;
  }

  autoLogin() {
    if ( this.getTokenFromLocalStorage() ) {
      this.router.navigateByUrl('catalog');
    }
  }



}
