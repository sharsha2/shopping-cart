import { Injectable } from '@angular/core';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    new Product(1, 'Product 1', 'This is product 1 description. This Book is really cool!', 99),
    new Product(2, 'Product 2', 'This is product 1 description. This Book is really cool!', 22),
    new Product(3, 'Product 3', 'This is product 1 description. This Book is really cool!', 23),
    new Product(4, 'Product 4', 'This is product 1 description. This Book is really cool!', 188),
    new Product(5, 'Product 5', 'This is product 1 description. This Book is really cool!', 199),
    new Product(5, 'Product 5', 'This is product 1 description. This Book is really cool!', 199)
  ];

  constructor() { }

  getProducts(): Product[] {
    // TODO: populate products from an API and return an Observable.
    return this.products;
  }
}
