import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  template: `
  <form #f="ngForm" (submit)="auth.login(f.value)">
    <input type="text" required [ngModel] name="user" placeholder="user (anything)">
    <input type="password" required [ngModel] name="password" placeholder="password (anything)">
    <button type="submit" class="btn btn-primary"
     [disabled]="!f.valid"
    >
      <i class="fa fa-lock"></i> Login
    </button>
</form>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.auth.autoLogin();
  }

}
