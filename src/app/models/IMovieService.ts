import { Observable } from "rxjs";
import { IMovie } from "./IMovie";

export interface IMovieService {
    getMovies(): Observable<IMovie[]>;
    getMovieId(id: string | null): Observable<IMovie>;
    getSearch(value: any): Observable<IMovie[]>;
    getCategory(): Observable<any[]>;
}