import { Component, OnInit } from '@angular/core';
import {Season} from '../../models/Season';
import {ActivatedRoute} from '@angular/router';
import {TvmazeService} from '../../models/services/tvmaze.service';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.sass']
})
export class SeasonsComponent implements OnInit {
  seasons: Season[];
  constructor(
    private tvmazeService: TvmazeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getEpisodes();
  }

  getEpisodes() {
    const id = this.route.snapshot.paramMap.get('id');
    this.tvmazeService.getSeasons(id).subscribe(season => { this.seasons = season; });
  }
}
