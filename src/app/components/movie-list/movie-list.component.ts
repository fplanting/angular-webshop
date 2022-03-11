import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/interfaces/ICategory';
import { IMovie } from 'src/app/interfaces/IMovie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: IMovie[] = [];
  categories: ICategory[] = [];

  constructor(private movieService: MovieService) { }

  // loops through movies, pair productId with categoryId.

  addCategory() {
    for(let i = 0; i < this.movies.length; i++) {
      for (let j = 0; j < this.movies[i].productCategory.length; j++) {
        for (let k = 0; k < this.categories.length; k++) {
          if(this.movies[i].productCategory[j].categoryId === this.categories[k].id) {
            this.movies[i].productCategory[j].category = this.categories[k].name + ' ';
          }
        }
      }
    }
  }

  // subscribes on api from MovieServices to show in html.
  ngOnInit(): void {
this.movieService.getMovies().subscribe(movie => {
  this.movies = movie;


  //subscribes on api for categories and matches with the right movie.
this.movieService.getCategory().subscribe(categories => {
  this.categories = categories;
  this.addCategory();
});
});

  }

}
