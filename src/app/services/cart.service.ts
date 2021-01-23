import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {CartItem} from '../models/cart-item';
import { HttpClient } from '@angular/common/http';
import { cartUrl} from '../config/api';
import {Product} from '../models/product';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(cartUrl).pipe(
    // To do: Mapping the obtained result to the cart item properties( pipe() and map() functions will be used.
    map((result: any[]) => {
      const cartItems: CartItem[] = [];
      for (const item of result) {
      let productExists = false;
      for (const i in cartItems) {
        if (cartItems[i].productId === item.product.id) {
          cartItems[i].qty++;
          productExists = true;
          break;
        }
      }
      if (!productExists) {
        cartItems.push(new CartItem(item.id, item.product));
        }
      }
      return cartItems;
      })
    );
}

    addProductToCart(product: Product) : Observable <any> {
    return this.http.post(cartUrl, { product });
  }
}
