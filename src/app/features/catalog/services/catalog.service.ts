import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../product';


@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Product[]>(`${environment.REST_API_URL}/products`);
  }

  detail() {
    // todo
  }
}
