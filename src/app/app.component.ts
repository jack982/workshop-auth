import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar ifLogged></app-navbar>
    <div class="container mt-3">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'workshop-auth';
}
