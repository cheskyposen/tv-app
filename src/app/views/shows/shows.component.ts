import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TvmazeService} from '../../models/services/tvmaze.service';
import {Show} from '../../models/Show';
import {DataService} from '../../models/services/data.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {
  title: string;
  tvShows: Show[];
  private name: string;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    ) {
    this.name = this.route.snapshot.paramMap.get('name');
    this.dataService.tvshows.subscribe((res) => { this.tvShows = res; });
  }

  ngOnInit() {
    this.dataService.getShows(this.name);
  }

  // getMovies() {
  //   const name = this.route.snapshot.paramMap.get('name');
  //   this.title = name;
  //   this.tvmazeService.getShows(name).subscribe(shows => { this.tvShows = shows; });
  // }
}
