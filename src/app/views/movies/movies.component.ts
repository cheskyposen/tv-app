import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Show} from '../../models/Show';
import {MoviesService} from '../../models/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  title: string;
  movies: Show[];
  columnsToDisplay = [
    'image', 'name',  'premiered', 'summary', 'language', 'rating', 'genres', 'status'
  ];
  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    const name = this.route.snapshot.paramMap.get('name');
    this.title = name;
    this.moviesService.getMovies(name).subscribe(movie => {this.movies = movie; });
  }
}
