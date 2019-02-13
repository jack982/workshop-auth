import { Component, OnInit } from '@angular/core';

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
      <li class="nav-item" routerLink="catalog" routerLinkActive="active">
        <a class="nav-link">Catalog</a>
      </li>
      <li class="nav-item" routerLink="contacts" routerLinkActive="active">
        <a class="nav-link" >Contacts</a>
      </li>
      <li class="nav-item" routerLink="login" routerLinkActive="active">
        <a class="nav-link">Login</a>
      </li>

    </ul>
  </div>
</nav>
  `,
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
