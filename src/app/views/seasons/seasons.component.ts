import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TvmazeService} from '../../models/services/tvmaze.service';
import {Show} from '../../models/Show';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent implements OnInit {
  show: Show;
  id: number;
  constructor(
    private tvmazeService: TvmazeService,
    private route: ActivatedRoute
  ) {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getShow();
    this.getSeasons();
  }
  getShow() {
    this.tvmazeService.getShow(this.id).subscribe(result => { this.show = result; });
  }
  getSeasons() {
    this.tvmazeService.getSeasons(this.id).subscribe(results => { this.show.seasons = results; });
  }
}
