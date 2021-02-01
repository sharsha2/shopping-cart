import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {PageNotFoundComponent} from './components/shared/page-not-found/page-not-found.component';
import { SupportComponent} from './components/support/support.component';
import {AboutComponent} from './components/about/about.component';

const routes: Routes = [
  {path: '', redirectTo: '/shop', pathMatch: 'full'},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'shop', component: ShoppingCartComponent},
  {path: 'support', component: SupportComponent},
  {path: 'about', component: AboutComponent },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
