import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMovie } from 'src/app/models/IMovie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private service: MovieService) { }

  moviesFromSearch: IMovie[] = [];
  searchValue: string = "";

  hide() {
    this.searchValue = "";
    this.getSearchResult();
  }

  getSearchResult() {
    this.moviesFromSearch = [];
    if (this.searchValue.length > 1) {
      this.service.getSearch(this.searchValue).subscribe(data => {
        this.moviesFromSearch = data;
      });
    }
  }


  ngOnInit(): void {
  }

}
