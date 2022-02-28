import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IApiResponse } from '../models/IApiResponse';
import { IMovie } from '../models/IMovie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
private movies = new Subject<IMovie[]>();
movies$ = this.movies.asObservable();


  constructor(private http: HttpClient) {}

  getMovies () {
    this.http.get<IApiResponse>(environment.apiUrl + '/products')
    .subscribe((dataFromApi) => {
      console.log(dataFromApi);
      this.movies.next(dataFromApi.products);
    });
  }
}
