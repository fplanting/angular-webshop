import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/interfaces/IMovie';

import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  moviesFromSearch: IMovie[] = [];
  searchValue: string = "";

  // to hide the search result when clicked on movie.
  hide() {
    this.searchValue = "";
    this.getSearchResult();
  }

  // on keydown in search-input in html, it shows results of movies,
  // depending on what your search text(value) is.

  getSearchResult() {
    this.moviesFromSearch = [];
    if (this.searchValue.length > 1) {
      this.movieService.getSearch(this.searchValue).subscribe(data => {
        this.moviesFromSearch = data;
      });
    }
  }


  ngOnInit(): void {
  }

}
