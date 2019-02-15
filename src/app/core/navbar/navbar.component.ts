import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  template: `
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand">Workshop-Auth</a>
  <button class="navbar-toggler" type="button"
   data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li
        class="nav-item" routerLink="/catalog" routerLinkActive="active">
          <a class="nav-link">Catalog</a>
      </li>
      <li
        class="nav-item" routerLink="/contacts" routerLinkActive="active">
          <a class="nav-link" >Contacts</a>
      </li>
      <li
          class="nav-item pull-right"
          (click)="auth.logout()">
          <a class="nav-link">Logout</a>
      </li>
    </ul>
  </div>
  <span class="navbar-text" *ngIf="auth.isLogged()">
    <strong>{{ auth.data.displayName }}</strong>
  </span>
</nav>
  `,
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
