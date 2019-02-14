import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { CatalogComponent } from './features/catalog/catalog.component';
import { ContactsComponent } from './features/contacts/contacts.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AuthService } from './core/services/auth.service';
import { CatalogService } from './features/catalog/services/catalog.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CatalogComponent,
    ContactsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthService, CatalogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
