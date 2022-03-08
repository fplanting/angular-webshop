import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/ICategory';
import { IMovie } from 'src/app/models/IMovie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: IMovie[] = [];
  categories: ICategory[] = [];

  constructor(private service: MovieService) { }

  addCategory() {
    for(let movieCount = 0; movieCount < this.movies.length; movieCount++) {
      for (let productCount = 0; productCount < this.movies[movieCount].productCategory.length; productCount++) {
        for (let categoryCount = 0; categoryCount < this.categories.length; categoryCount++) {
          if(this.movies[movieCount].productCategory[productCount].categoryId === this.categories[categoryCount].id) {
            this.movies[movieCount].productCategory[productCount].category = this.categories[categoryCount].name + ' ';
          }
        }
      }
    }
  }
  ngOnInit(): void {

    this.service.movies$.subscribe((dataFromService: IMovie[]) => {
      this.movies = dataFromService;
    });
    this.service.getMovies();

this.service.getCategory().subscribe(categories => {
  this.categories = categories;
  this.addCategory();
});
}

}
