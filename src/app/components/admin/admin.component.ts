import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/models/IOrder';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  orders: IOrder[] = [];

  constructor(private orderservice: OrderService) { }

  ngOnInit(): void {
    this.orderservice.getOrders().subscribe(data => {
      this.orders = data;
    });
  }

  removeOrder(order: any) {
    this.orderservice.deleteOrder(order.id).subscribe();
    for (let i = 0; i < this.orders.length; i++) {
      if (order.id === this.orders[i].id) {
        this.orders.splice(i, 1);
      }
    }
  }
}
