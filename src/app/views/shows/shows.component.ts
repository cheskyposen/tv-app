import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TvShow} from '../../models/TvShow';
import {TvmazeService} from '../../models/services/tvmaze.service';

@Component({
  selector: 'app-movies',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {
  title: string;
  tvShows: TvShow[];

  constructor(
    private tvmazeService: TvmazeService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    const name = this.route.snapshot.paramMap.get('name');
    this.title = name;
    this.tvmazeService.getShows(name).subscribe(shows => {this.tvShows = shows; });
  }
}
