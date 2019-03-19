import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Show} from '../../models/Show';
import {MoviesService} from '../../models/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent implements OnInit {
  movies: Show[];
  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    const name = this.route.snapshot.paramMap.get('name');
    this.moviesService.getMovies(name).subscribe(movie => {this.movies = movie});
  }
}
