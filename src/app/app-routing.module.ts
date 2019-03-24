import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from './views/search/search.component';
import {MoviesComponent} from './views/movies/movies.component';
import {EpisodesComponent} from './views/episodes/episodes.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full'},
  { path: 'search', component: SearchComponent },
  { path: 'movies/:name', component: MoviesComponent },
  { path: 'show/:id', component: EpisodesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
