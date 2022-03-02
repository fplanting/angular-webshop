import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from 'src/app/models/IMovie';
import { CheckoutService } from 'src/app/services/checkout.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie: IMovie | undefined;

  constructor(private route: ActivatedRoute, private service: MovieService, private checkoutservice: CheckoutService) { }

 

  ngOnInit(): void {
    this.route.paramMap.subscribe(p => {
      const id = p.get('id');

      this.service.getMovieId(id).subscribe(data => {
        this.movie = data;
      })
    })
  }

  addToCheckout(movie: any) {
    this.checkoutservice.addMovie(movie);
  }
}
