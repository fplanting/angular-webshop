import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/IMovie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: IMovie[] = [];

  constructor(private service: MovieService) { }

  ngOnInit(): void {
    console.log("test");
    this.service.movies$.subscribe( 
      (dataFromService: IMovie[]) => {
        console.log(dataFromService);
      this.movies = dataFromService;
    });
    this.service.getMovies();
}

}
