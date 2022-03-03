import { IOrderRow } from "./IOrderRow";

export interface IOrder {
    id: number;
    companyId: number;
    created: string;
    totalPrice: number;
    status: number;
    orderRows: IOrderRow[];
}