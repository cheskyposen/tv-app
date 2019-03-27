import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Show} from '../../models/Show';
import {TvmazeService} from '../../models/services/tvmaze.service';

@Component({
  selector: 'app-movies',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {
  title: string;
  tvShows: Show[];

  constructor(
    private tvmazeService: TvmazeService,
    private route: ActivatedRoute
    ) {
    this.title = this.route.snapshot.paramMap.get('name');
  }

  ngOnInit() {
    this.getShows();
  }

  getShows() {
    this.tvmazeService.getShows(this.title).subscribe(results => { this.tvShows = results; });
  }
  dynamicStyles(status) {
    switch (status) {
      case('Running'):
        return {color : 'green'};
      case('Ended'):
        return {color : 'red'};
    }
  }
}
