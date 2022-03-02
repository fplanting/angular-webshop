import { IMovie } from "./IMovie";

export interface ICheckoutItem {
    movie: IMovie;
    amount: number;
}