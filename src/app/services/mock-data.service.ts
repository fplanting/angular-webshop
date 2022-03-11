import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IMovie } from '../interfaces/IMovie';
import { IMovieService } from '../interfaces/IMovieService';


@Injectable({
  providedIn: 'root'
})
export class MockDataService implements IMovieService {

  // mock-data to use for tests in movie-list-spec and movie-details-spec.

categories = [{"id":5, "name": "Action"}, {"id":6, "name": "Thriller"}, {"id":7, "name": "Comedy"}, {"id":8, "name": "Sci-fi"}];

movie: IMovie = {
  id: 76,
  name: 'The Dark Knight', 
  description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham..', 
  price: 199, 
  imageUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg', 
  year: 2008,
  added: '2016-01-05T00:00:00',
  productCategory: [{categoryId: 5, category: null}, {categoryId: 6, category: null}]
};

movies: IMovie[] = [
  {
  id: 77,
  name: 'Interstellar', 
  description: 'A team of explorers travel through a wormhole in space in an attempt to ensure...', 
  price: 129, 
  imageUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SY1000_CR0,0,640,1000_AL_.jpg', 
  year: 2014,
  added: '2017-07-16T00:00:00',
  productCategory: [{categoryId: 8, category: null}]
},

{
  id: 79,
  name: 'Mordern Times', 
  description: 'The Tramp struggles to live in modern industrial society with the help of a young homeless woman..', 
  price: 100, 
  imageUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg', 
  year: 1936,
  added: '2017-07-01T00:00:00',
  productCategory: [{categoryId: 7, category: null}]
},

{
  id: 83,
  name: 'City Lights', 
  description: 'With the aid of a wealthy erratic tippler, a dewy-eyed tramp who has fallen in love with a sightless..', 
  price: 100, 
  imageUrl: 'https://m.media-amazon.com/images/M/MV5BY2I4MmM1N2EtM2YzOS00OWUzLTkzYzctNDc5NDg2N2IyODJmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg', 
  year: 1931,
  added: '2017-06-04T00:00:00',
  productCategory: [{categoryId: 7, category: null}]
},

{
  id: 90,
  name: 'The Prestige', 
  description: 'After a tragic accident two stage magicians engage in a battle to create the ultimate illusion whilst..', 
  price: 100, 
  imageUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_.jpg', 
  year: 2006,
  added: '2017-03-31T00:00:00',
  productCategory: [{categoryId: 6, category: null}, {categoryId: 8, category: null}]
},
];

  getMovies(): Observable<IMovie[]> {
  return of(this.movies);
}

  getMovieId(id: string | null): Observable<IMovie> {
  return of(this.movie);
}

  getCategory(): Observable<any[]> {
    return of(this.categories);
}

  constructor() { }
}
