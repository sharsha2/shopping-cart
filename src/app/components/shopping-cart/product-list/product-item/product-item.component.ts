import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../models/product';
import { MessangerService } from '../../../../services/messanger.service';
import { CartService} from '../../../../services/cart.service';
import {WishlistService} from '../../../../services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: Product;
  @Input() addedToWishlist: boolean;
  constructor(private msg: MessangerService,
              private cartService: CartService,
              private wishlistService: WishlistService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  // tslint:disable-next-line:typedef
  handleAddToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem);
    });
  }

  // tslint:disable-next-line:typedef
  handleAddToWishlist(){
    this.wishlistService.addToWishlist(this.productItem.id).subscribe(() =>
    {
        this.addedToWishlist = true;
    });
  }

  // tslint:disable-next-line:typedef
  handleRemoveFromWishlist(){
    this.wishlistService.removeFromWishlist(this.productItem.id).subscribe(() => {
    this.addedToWishlist = false;
    });
  }
}
