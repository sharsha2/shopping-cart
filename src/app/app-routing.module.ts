import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {PageNotFoundComponent} from './components/shared/page-not-found/page-not-found.component';
import { SupportComponent} from './components/support/support.component';
import {AboutComponent} from './components/about/about.component';
import {CartComponent} from './components/shopping-cart/cart/cart.component';
import {WishlistService} from './services/wishlist.service';
import {UserinfoComponent} from './components/userinfo/userinfo.component';

const routes: Routes = [
  {path: '', redirectTo: '/shop', pathMatch: 'full'},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'userinfo', component: UserinfoComponent},
  {path: 'shop', component: ShoppingCartComponent},
  {path: 'support', component: SupportComponent},
  {path: 'about', component: AboutComponent },
  {path: 'cart', component: CartComponent},
  {path: '**', component: PageNotFoundComponent},
  {path: 'wishlist', component: WishlistService}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
