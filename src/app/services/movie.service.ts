import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from '../interfaces/ICategory';
import { IMovie } from '../interfaces/IMovie';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
private movies = new Subject<IMovie[]>();
movies$ = this.movies.asObservable();


  constructor(private http: HttpClient) {}

  // gets api's for movies, id, search and category

  getMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(environment.apiUrl + '/products');
  }

getMovieId(id: string | null): Observable<IMovie> {
  return this.http.get<IMovie>(environment.apiUrl + '/products/' + id);
}

getSearch(value: any): Observable<IMovie[]> {
  return this.http.get<IMovie[]>(environment.apiUrl + '/search?searchText=' + value);
}

getCategory(): Observable<any[]> {
  return this.http.get<ICategory[]>(environment.apiUrl + '/categories');
}
}
