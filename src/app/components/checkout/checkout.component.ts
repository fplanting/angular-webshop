import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICheckoutItem } from 'src/app/models/ICheckoutItem';
import { IOrder } from 'src/app/models/IOrder';
import { IOrderRow } from 'src/app/models/IOrderRow';
import { CheckoutService } from 'src/app/services/checkout.service';
import { MovieService } from 'src/app/services/movie.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {


  constructor(private service: MovieService, 
    private checkoutservice: CheckoutService, 
    private orderservice: OrderService, 
    private router: Router) { 
      
    this.items = checkoutservice.getCart();
  }

  items: ICheckoutItem[] = [];
  totalPrice: number = 0;
  orderRows: IOrderRow[] = [];
  
  ngOnInit(): void {
    this.getTotalPrice();
  }

  orderDone() {
  for (let i = 0; i < this.items.length; i++) {
    const productId = this.items[i].movie.id;
    const amount = this.items[i].amount;
    this.orderRows.push({productId, amount });
}

const newOrder: IOrder = {
  id: 0,
  companyId: 37,
  created: new Date().toDateString(),
  totalPrice: this.totalPrice,
  status: 0,
  orderRows: this.orderRows
};

if (this.items.length) {
  this.orderservice.postOrder(newOrder).subscribe();
  this.items = this.checkoutservice.removeCart();
  this.totalPrice = 0;
  this.router.navigate(['/confirmation']);
}


  }

getTotalPrice() {
  this.totalPrice = 0;
  for (let i = 0; i <this.items.length; i++) {
    this.totalPrice += this.items[i].amount * this.items[i].movie.price;
  }
}
}
