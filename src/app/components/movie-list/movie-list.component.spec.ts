import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockDataService } from 'src/app/services/mock-data.service';
import { MovieService } from 'src/app/services/movie.service';
import { DisplayMovieComponent } from '../display-movie/display-movie.component';
import { MovieListComponent } from './movie-list.component';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieListComponent, DisplayMovieComponent ],
      imports: [HttpClientModule],
      providers: [{provide: MovieService, useClass: MockDataService}],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test to see if it shows 4 movies.
  it('should show 4 movies', () => {
    expect(component.movies.length).toBe(4);
  });

  // test to see if it shows categories.
  it('should show categories', () => {
    for(const movie of component.movies) {
      for(const category of movie.productCategory) {
        console.log(category.category)
        expect(category.category).toBeTruthy();
      }
 }
  });
  
});
