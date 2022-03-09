import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/IMovie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: IMovie[] = [];
  
  constructor(private service: MovieService) { }

  ngOnInit(): void {

    this.service.getMovies().subscribe(movie => {
      this.movies = movie;
  });
}

}
