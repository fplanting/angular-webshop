import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICheckoutItem } from 'src/app/interfaces/ICheckoutItem';
import { IOrder } from 'src/app/interfaces/IOrder';

import { CheckoutService } from 'src/app/services/checkout.service';
import { OrderService } from 'src/app/services/order.service';
import { FormBuilder, Validators } from '@angular/forms';
import { IMovie } from 'src/app/interfaces/IMovie';
import { IOrderRow } from 'src/app/interfaces/IOrderRow';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {


  constructor( 
    private checkoutService: CheckoutService, 
    private orderService: OrderService, 
    private router: Router, 
    private fb: FormBuilder) { 
      
  }

  items: ICheckoutItem[] = this.checkoutService.getCart();
  totalPrice: number = 0;
  paymentMethods = ['paypal', 'Mastercard', 'VISA'];
  orderRows: IOrderRow[] = [];

  userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    payment: ['', Validators.required]
  });
  
  ngOnInit(): void {
    this.getTotalPrice();
  }


  // when order is done, it takes id and amount from orderRows interface,
  // that is included in Iorder and remapping it.
  orderDone() {
  for (let i = 0; i < this.items.length; i++) {
    const productId = this.items[i].movie.id;
    const amount = this.items[i].amount;
    this.orderRows.push({productId, amount });
}

const newOrder: IOrder = {
  id: 0,
  companyId: 37,
  created: new Date().toISOString(),
  createdBy: this.userForm.get('email')?.value,
  paymentMethod: this.userForm.get('payment')?.value,
  totalPrice: this.totalPrice,
  status: 0,
  orderRows: this.orderRows
};

// checks if order is correct, then removes the cart and navigate to confirmation-router.

if (this.items.length) {
  this.orderService.postOrder(newOrder).subscribe();
  this.items = this.checkoutService.removeCart();
  this.totalPrice = 0;
  this.router.navigate(['/confirmation']);
}


  }

// function to get the totalprice of movies in the cart.
getTotalPrice() {
  this.totalPrice = 0;
  for (let i = 0; i <this.items.length; i++) {
    this.totalPrice += this.items[i].amount * this.items[i].movie.price;
  }
}

// removes movie if clicked on html-page.
eraseMovie(movie: IMovie) {
  this.checkoutService.removeMovie(movie);
  this.getTotalPrice();
}
}
