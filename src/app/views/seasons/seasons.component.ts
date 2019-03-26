import { Component, OnInit } from '@angular/core';
import {Season} from '../../models/Season';
import {ActivatedRoute} from '@angular/router';
import {TvmazeService} from '../../models/services/tvmaze.service';
import {Episode} from '../../models/Episode';
import {DataService} from '../../models/services/data.service';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.sass']
})
export class SeasonsComponent implements OnInit {
  seasons: Season[];
  id: string;
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.dataService.tvshows.subscribe((res) => { this.seasons = res; });
  }

  ngOnInit() {
    this.dataService.getSeasons(this.id);
  }

  // getSeasons() {
  //   const id = this.route.snapshot.paramMap.get('id');
  //   this.tvmazeService.getSeasons(id).subscribe(season => { this.seasons = season; });
  // }
}
