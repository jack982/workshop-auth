import { Component, OnInit } from '@angular/core';
import { CatalogService } from './services/catalog.service';
import { Product } from './product';

@Component({
  selector: 'app-catalog',
  template: `
    <ul class="list-group" *ngIf="products">
      <li *ngFor="let p of products"
        class="list-group-item">
        {{ p.productName }}
      </li>
    </ul>
  `,
  styles: []
})
export class CatalogComponent implements OnInit {

  products: Product[];
  error: any;

  constructor(public srv: CatalogService) { }

  ngOnInit() {
    this.srv.list().subscribe(
      ( res: Product[] ) => this.products = res,
      ( err ) => this.error = err
    );
  }

  // todo onchange
}
