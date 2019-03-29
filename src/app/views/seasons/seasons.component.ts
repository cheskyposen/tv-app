import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TvMazeService} from '../../models/services/tv-maze.service';
import {Show} from '../../models/Show';
import * as moment from 'moment';
import {interval} from 'rxjs';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent implements OnInit, OnDestroy {
  show: Show;
  id: number;
  checked: boolean;
  duration: any;
  next: any;
  countdown = interval(1000);
  constructor(
    private tvMazeService: TvMazeService,
    private route: ActivatedRoute
  ) {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getShow();
  }
  ngOnDestroy() {
  }
  getShow() {
    this.tvMazeService.getShow(this.id).subscribe((result) => {
        this.show = new Show(result);
        this.getSeasons();
        console.log(this.show);
        if (this.show.upNext) {
          this.next = moment(this.show.upNext.nextepisode.airdate + 'T' + this.show.upNext.nextepisode.airtime);
          console.log(this.next);
          this.countdown.subscribe(() => {
            const time = moment();
            this.duration = moment.duration(this.next.diff(time));
            console.log(this.duration);
          });
        }
      });
  }
  getSeasons() {
    this.tvMazeService.getSeasons(this.id).subscribe(results => { this.show.seasons = results; });
  }
}
