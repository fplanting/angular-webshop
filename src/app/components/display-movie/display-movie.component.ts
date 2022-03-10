import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/IMovie';

@Component({
  selector: 'app-display-movie',
  templateUrl: './display-movie.component.html',
  styleUrls: ['./display-movie.component.scss']
})
export class DisplayMovieComponent implements OnInit {

  // input from movie-list, displays movie in html.
  @Input() movie: IMovie | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
