import { Directive, HostBinding } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[ifLogged]'
})
export class IfLoggedDirective {

  @HostBinding('style.display') get style() {
    return this.auth.isLogged() ? null : 'none';
  }

  constructor(public auth: AuthService) { }

}
