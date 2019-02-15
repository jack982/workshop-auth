import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError, of} from 'rxjs';
import { AuthService } from './auth.service';
import { catchError, finalize } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // save the current request
    let current = req;

    // if user is logged in add the token to the request
    if ( this.auth.data ) {
      current = req.clone({
       // headers: req.headers.set('Authentication', this.auth.data.token)
       headers: req.headers.set('Authentication', this.auth.getTokenFromLocalStorage())
      });
    }

    return next.handle(current)
      .pipe(
        catchError(err =>  {
          if (err instanceof HttpErrorResponse) {
            switch (err.status) {
              case 401:
              case 404:
              default:
                this.auth.logout();
                return throwError(err.message);
            }
          }
          return of(err);
        }),
        finalize(() => {
          console.log('done');
        })
      );
  }
}
