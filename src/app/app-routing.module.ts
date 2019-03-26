import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from './views/search/search.component';
import {ShowsComponent} from './views/shows/shows.component';
import {SeasonsComponent} from './views/seasons/seasons.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'search/:name', component: ShowsComponent },
  { path: 'show/:id', component: SeasonsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
