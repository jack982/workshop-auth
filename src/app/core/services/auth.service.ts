import { Injectable } from '@angular/core';
import { Auth } from '../model/auth';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable()
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
          res => {
            this.data = res;
            this.router.navigateByUrl('catalog');
          },
          err => this.error = err
        );
  }

  isLogged() {
    return this.data ? !!this.data.token : '';
  }

  logout() {
    this.data = null;
  }




}
