import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { ContactsComponent } from './features/contacts/contacts.component';
import { CatalogComponent } from './features/catalog/catalog.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
