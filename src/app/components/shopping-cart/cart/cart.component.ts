import { Component, OnInit } from '@angular/core';
import { MessangerService } from '../../../services/messanger.service';
import {Product} from '../../../models/product';
import {Observable} from 'rxjs';
import {CartItem} from '../../../models/cart-item';
import {cartUrl} from '../../../config/api';
import {CartService} from '../../../services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [];
  cartTotal = 0;
  constructor(private msg: MessangerService,
              private cartService: CartService) {
  }



  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems();
  }

  // tslint:disable-next-line:typedef
  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.loadCartItems();
    });
  }

  // @ts-ignore
  // tslint:disable-next-line:typedef
  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calCartTotal();
    });
  }
  // tslint:disable-next-line:typedef
  calCartTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price);
    });
  }
}

