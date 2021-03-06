import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
// tslint:disable-next-line:import-spacing
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';

import {AuthService} from './services/auth.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import {FormsModule} from '@angular/forms';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule} from './app-routing.module';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { WeatherWidgetMainComponent } from './components/weather-widget-main/weather-widget-main.component';
import { SupportComponent } from './components/support/support.component';
import { AboutComponent } from './components/about/about.component';
import { UserinfoComponent } from './components/userinfo/userinfo.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    WeatherWidgetMainComponent,
    SupportComponent,
    AboutComponent,
    UserinfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBINBGBqGq-fXcWXeW4CYOZ3c2YRawDJ38',
      authDomain: 'fir-auth-646ad.firebaseapp.com',
      projectId: 'fir-auth-646ad',
      storageBucket: 'fir-auth-646ad.appspot.com',
      messagingSenderId: '676433863087',
      appId: '1:676433863087:web:abc9acf480b89bd6b48f5a',
      measurementId: 'G-HMS0ZXKM9R'
    }),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
declare var StripeCheckout: any;
