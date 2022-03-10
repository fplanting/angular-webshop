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

  constructor(private orderService: OrderService) { }

  
  ngOnInit(): void {
    this.orderService.getOrders().subscribe(data => {
      this.orders = data;
    });
  }

  // checks the Id and if it matches = deletes it.
  removeOrder(id: number) {
    this.orderService.deleteOrder(id).subscribe();
    for (let i = 0; i < this.orders.length; i++) {
      if (id === this.orders[i].id) {
        this.orders.splice(i, 1);
      }
    }
  }
}
