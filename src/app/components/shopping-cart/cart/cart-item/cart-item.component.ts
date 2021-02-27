import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  constructor() { }
  @Input() cartItem: any;
  private firestore: any;
  private toastr: any;
  // tslint:disable-next-line:typedef
  id: string;

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }
  // tslint:disable-next-line:typedef
  onDelete(id: string){
    if (confirm('Are you sure to delete this Item from cart?')) {
      this.firestore.doc('employees/' + id).delete();
      this.toastr.warning('Deleted Successfully', 'EMP. Register');
    }
  }
}


