import { Injectable } from '@angular/core';
import { wishlistUrl } from '../config/api';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getWishlist() {
    return this.http.get(wishlistUrl).pipe(
      map((result: any[]) => {
      let productIds = [];
      result.forEach(item => productIds.push(item.id));
      return productIds;
      })
    );
  }

  // tslint:disable-next-line:typedef
  addToWishlist(productId){
    return this.http.post(wishlistUrl, {id: productId});
  }

  // tslint:disable-next-line:typedef
  removeFromWishlist(productId){
    return this.http.delete(wishlistUrl + '/' + productId);
  }
}
