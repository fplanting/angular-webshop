import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMovie } from '../models/IMovie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
private movies = new Subject<IMovie[]>();
movies$ = this.movies.asObservable();


  constructor(private http: HttpClient) {}

  getMovies () {
    this.http.get<IMovie[]>(environment.apiUrl + '/products')
    .subscribe((dataFromApi) => {
      console.log(dataFromApi);
      this.movies.next(dataFromApi);
    });
  }

getMovieId(id: string | null): Observable<IMovie> {
  return this.http.get<IMovie>(environment.apiUrl + '/products/' + id);
}

getSearch(search: string): Observable<IMovie[]> {
  return this.http.get<IMovie[]>(environment.apiUrl + '/search' + '?searchText=' + search);
}
}
