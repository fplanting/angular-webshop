import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ICheckoutItem } from '../models/ICheckoutItem';
import { IMovie } from '../models/IMovie';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor() { }
 
  private cartSource = new Subject<ICheckoutItem[]>();
  private cart: ICheckoutItem[] = [];

  currentCart = this.cartSource.asObservable();
  
  // adding a movie to localstorage when pressed button on movie-details
  addMovie(movie: IMovie) {
    let movieFound = false;

    if (!movieFound) {
      this.cart.push({ movie, amount: 1 });
    }
    localStorage.setItem('movie-cart', JSON.stringify(this.cart));
    this.cartSource.next(this.cart);
  }

  // to remove a movie in cart
  removeMovie(movie: IMovie) {
    for (let i = 0; i < this.cart.length; i++) {
      if (movie.id === this.cart[i].movie.id) {
        this.cart[i].amount--;
      }
      if (this.cart[i].amount < 1) {
        this.cart.splice(i, 1);
      }
    }
  }

  // to remove cart on checkout
  removeCart() {
    this.cart.length = 0;
    localStorage.setItem('movie-cart', JSON.stringify(this.cart));
    this.cartSource.next(this.cart);
    return this.cart;
  }

  // to get access on cart and show in checkout-component
   getCart(): ICheckoutItem[] {
    let cartString: string = localStorage.getItem('movie-cart') || '[]';
    this.cart = JSON.parse(cartString);
   return this.cart;
 
}
  }
