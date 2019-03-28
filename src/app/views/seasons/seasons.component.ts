import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TvmazeService} from '../../models/services/tvmaze.service';
import {Show} from '../../models/Show';
import * as moment from 'moment';
import {interval} from 'rxjs';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent implements OnInit {
  show: Show;
  id: number;
  checked: boolean;
  duration: any;
  next: any;
  constructor(
    private tvMazeService: TvmazeService,
    private route: ActivatedRoute
  ) {
    this.id = +this.route.snapshot.paramMap.get('id');
    // this.show.upNext.nextepisode.airdate = moment();
    // console.log(this.show.upNext.nextepisode.airdate);
  }

  ngOnInit() {
    this.getShow();
    this.getSeasons();
    // interval(5000).subscribe(() => {
    //   const time = moment();
    //   this.duration = moment.duration(this.show.nextEpisode.airdate.diff(time));
    //   console.log(this.duration);
    // });
  }
  getShow() {
    this.tvMazeService.getShow(this.id)
      .subscribe(result => {
        this.show = new Show(result);
        console.log(this.show);
        this.next = moment(this.show.upNext.nextepisode.airdate + 'T' + this.show.upNext.nextepisode.airtime);
        console.log(this.next);
      });
  }
  getSeasons() {
    this.tvMazeService.getSeasons(this.id).subscribe(results => { this.show.seasons = results; });
  }
}
