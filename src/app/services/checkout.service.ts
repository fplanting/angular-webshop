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

  // to remove cart on checkout
  removeCart() {
    this.cart.length = 0;
    localStorage.setItem('movie-cart', JSON.stringify(this.cart));
    this.cartSource.next(this.cart);
  }

   getCart(): ICheckoutItem[] {
    let cartString: string = localStorage.getItem('movie-cart') || '[]';
    this.cart = JSON.parse(cartString);
   return this.cart;
    //this.cart = JSON.parse(localStorage.getItem('movie-cart')) || [];
 
}
  }
