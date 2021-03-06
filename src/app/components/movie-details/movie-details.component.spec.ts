import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRouteStub } from 'src/test/activatedRouteStub';
import { MockDataService } from 'src/app/services/mock-data.service';

import { MovieDetailsComponent } from './movie-details.component';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;

  //adds for ActivatedRoute test.
  let activatedRoute = new ActivatedRouteStub({ id: 76});

  beforeEach(async () => {
    //adds for ActivatedRoute test.
    activatedRoute.setParamMap({ id: 76 });
    
    TestBed.configureTestingModule({
      declarations: [ MovieDetailsComponent],
      imports: [RouterTestingModule.withRoutes([]), HttpClientModule],
      providers: [
        {provide: activatedRoute, useValue: activatedRoute},
        {provide: MovieService, useClass: MockDataService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test to see if it shows 1 movie.
  it('should show 1 movie', () => {
    console.log(component)
    expect(component.movie?.name).toBe("The Dark Knight");
  })
});
