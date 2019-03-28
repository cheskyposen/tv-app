import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Show} from '../../models/Show';
import {TvMazeService} from '../../models/services/tv-maze.service';

@Component({
  selector: 'app-movies',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {
  title: string;
  tvShows: Show[];

  constructor(
    private tvMazeService: TvMazeService,
    private route: ActivatedRoute
    ) {
    this.title = this.route.snapshot.paramMap.get('name');
  }

  ngOnInit() {
    this.getShows();
  }

  getShows() {
    this.tvMazeService.getShows(this.title).subscribe(results => { this.tvShows = results; });
  }
  dynamicStyles(status) {
    switch (status) {
      case('Running'):
        return {color : 'green'};
      case('Ended'):
        return {color : 'red'};
      case('In Development'):
        return {color : 'blue'};
    }
  }
}
