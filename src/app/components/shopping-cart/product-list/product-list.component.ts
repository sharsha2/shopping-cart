import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import {Product} from '../../../models/product';
import {WishlistService} from '../../../services/wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  wishlist: any[] = [];
  constructor(private productService: ProductService,
              private wishlistService: WishlistService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
     this.loadProducts();
     this.loadWishlist();
  }

  // tslint:disable-next-line:typedef
  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
    });
  }

  // tslint:disable-next-line:typedef
  loadWishlist() {
    this.wishlistService.getWishlist().subscribe(productIds => {
      console.log(productIds);
      this.wishlist = productIds;
    });
  }

}
