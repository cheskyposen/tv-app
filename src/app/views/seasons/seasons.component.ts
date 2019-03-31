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
  // creates an event to unsubscribe when emitted
  onDestroyEvent: EventEmitter<string> = new EventEmitter();
  show: Show;
  id: number;
  checked: boolean;
  duration: any;
  next: any;
  // countdown is func that runs every 1000 ms until onDestroyEvent emits
  countdown = interval(1000).pipe(takeUntil(this.onDestroyEvent));
  constructor(
    private tvMazeService: TvMazeService,
    private route: ActivatedRoute,
    private bottomSheet: MatBottomSheet
  ) {
    // takes a snapshot from url and assigns 'name' to var id
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    // calls the function to get show on init
    this.getShow();
  }
  ngOnDestroy() {
    // when leaving page emits event to unsubscribe from all subscriptions
    this.onDestroyEvent.emit();
  }

  getShow() {
    // calls the tv maze service api call func, pipes in an event to stop subscription,
    this.tvMazeService.getShow(this.id)
      .pipe(takeUntil(this.onDestroyEvent))
      .subscribe((result) => {
        // next it assigns http call result to show
        this.show = new Show(result);
        // makes an api call func to get seasons
        this.getSeasons();
        // checks if there's an upcoming season and calls the countdown func
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
    // assigns time and date of next episode to this.next
    this.next = moment(this.show.upNext.nextepisode.airdate + 'T' + this.show.upNext.nextepisode.airtime, moment.HTML5_FMT.DATETIME_LOCAL);
    console.log(this.next);
    // subscribes to countdown function
    this.countdown.subscribe(() => {
      const time = moment();
      // compares now with the next episode and gets the difference
      this.duration = moment.duration(this.next.diff(time));
      console.log(this.duration);
    });
  }
  // opens the mat bottom sheet and passed the data to displayed in sheet
  openBottomSheet(): void {
    this.bottomSheet.open(NextEpisodeComponent, { data: this.show.upNext.nextepisode });
  }
}
