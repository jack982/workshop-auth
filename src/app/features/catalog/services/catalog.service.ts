import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class CatalogService {



  constructor(private http: HttpClient) { }

  list() {
    this.http.get<any>(`${environment.REST_API_URL}/products`);
  }

  detail() {
    // todo
  }
}
