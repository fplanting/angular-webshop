import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from 'src/app/interfaces/IMovie';

@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.scss']
})
export class MovieDisplayComponent implements OnInit {
  // input from movie-list, displays movie in html.
  @Input() movie: IMovie | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
