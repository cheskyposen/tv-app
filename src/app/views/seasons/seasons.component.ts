import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TvMazeService} from '../../models/services/tv-maze.service';
import {Show} from '../../models/Show';
import * as moment from 'moment';
import {interval} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {MatBottomSheet} from '@angular/material';
import {NextEpisodeComponent} from '../next-episode/next-episode.component';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent implements OnInit, OnDestroy {
  onDestroyEvent: EventEmitter<string> = new EventEmitter();
  show: Show;
  id: number;
  checked: boolean;
  duration: any;
  next: any;
  countdown = interval(1000).pipe(takeUntil(this.onDestroyEvent));
  constructor(
    private tvMazeService: TvMazeService,
    private route: ActivatedRoute,
    private bottomSheet: MatBottomSheet
  ) {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getShow();
  }
  ngOnDestroy() {
    this.onDestroyEvent.emit();
  }

  getShow() {
    this.tvMazeService.getShow(this.id)
      .pipe(takeUntil(this.onDestroyEvent))
      .subscribe((result) => {
        this.show = new Show(result);
        this.getSeasons();
        if (this.show.upNext) {
          this.setupCountdown();
        }
        console.log(this.show);
      });
  }
  getSeasons() {
    this.tvMazeService.getSeasons(this.id)
      .pipe(takeUntil(this.onDestroyEvent))
      .subscribe(results => { this.show.seasons = results; });
  }

  private setupCountdown() {
    this.next = moment(this.show.upNext.nextepisode.airdate + 'T' + this.show.upNext.nextepisode.airtime);
    console.log(this.next);
    this.countdown.subscribe(() => {
      const time = moment();
      this.duration = moment.duration(this.next.diff(time));
      console.log(this.duration);
    });
  }
  openBottomSheet(): void {
    this.bottomSheet.open(NextEpisodeComponent, { data: this.show.upNext.nextepisode });
  }
}
