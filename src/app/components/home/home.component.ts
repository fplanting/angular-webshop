import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/interfaces/IMovie';

import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: IMovie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {

    // getting the movies from api from MovieService to be shown in html.
    this.movieService.getMovies().subscribe(movie => {
      this.movies = movie;
  });
}

}
