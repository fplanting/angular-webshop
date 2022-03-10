import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IOrder } from '../models/IOrder';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  // gets api for orders with companyId, to delete a order and post order to a api.

  getOrders(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(environment.apiUrl + '/orders?companyId=37');
  }

  deleteOrder(id: number): Observable<IOrder> {
    return this.http.delete<IOrder>(environment.apiUrl + '/orders/' + id);
  }

  postOrder(order: IOrder) {
    return this.http.post(environment.apiUrl + '/orders/', order);
  }

}
