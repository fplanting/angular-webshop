import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from 'src/app/models/IMovie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  movies: IMovie[] = [];
  search: any;

  constructor(private route: ActivatedRoute, private service: MovieService) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.search = params.get('search');
      this.getSearchResult();
    });
  }

  getSearchResult() {
    this.service.getSearch(this.search).subscribe(
      data => {
        this.movies = data;
      }
    );
  }
}
