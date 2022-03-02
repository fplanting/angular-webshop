import { Component, OnInit } from '@angular/core';
import { ICheckoutItem } from 'src/app/models/ICheckoutItem';
import { CheckoutService } from 'src/app/services/checkout.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private service: MovieService, private checkoutservice: CheckoutService) { 
    this.items = checkoutservice.getCart();
  }

  items: ICheckoutItem[] = [];
  
  ngOnInit(): void {
  }

}
