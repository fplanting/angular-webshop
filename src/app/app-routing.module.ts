import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [

{ path: '', component: HomeComponent },
{ path: 'movies', component: MovieListComponent },
{ path: 'movie/:id', component: MovieDetailsComponent },
{ path: 'checkout', component: CheckoutComponent },
{ path: '**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
