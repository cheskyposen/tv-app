import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Show} from '../../models/Show';
import {TvMazeService} from '../../models/services/tv-maze.service';
import {takeUntil} from 'rxjs/operators';
import {Episode} from '../../models/Episode';

@Component({
  selector: 'app-movies',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit, OnDestroy {
  // creates an event to unsubscribe when emitted
  onDestroyEvent: EventEmitter<string> = new EventEmitter();
  title: string;
  tvShows: Show[];

  constructor(
    private tvMazeService: TvMazeService,
    private route: ActivatedRoute
    ) {
    // takes a snapshot from url and assigns 'name' to var title
    this.title = this.route.snapshot.paramMap.get('name');
  }
  ngOnInit() {
    // calls the function to get shows on init
    this.getShows();
  }
  ngOnDestroy() {
    // when leaving page emits event to unsubscribe
    this.onDestroyEvent.emit();
  }
  private getShows(): void {
    // calls the tv maze service api call func, pipes in an event to stop subscription, next it assigns http call results to local tvShows
    this.tvMazeService.getShows(this.title).pipe(takeUntil(this.onDestroyEvent))
      .subscribe((results) => {
        this.tvShows = results;
        this.tvShows.forEach((show) => {
          if (show.prevUrl) {
            this.tvMazeService.getEpisode(show.prevUrl)
              .pipe(takeUntil(this.onDestroyEvent)).subscribe((res) => show.prevEpisode = new Episode(res));
          }
          if (show.nextUrl) {
            this.tvMazeService.getEpisode(show.nextUrl)
              .pipe(takeUntil(this.onDestroyEvent)).subscribe((res) => show.nextEpisode = new Episode(res));
          }
        });
      });
  }
  // changes the color of status according to status
  private dynamicStyles(status): any {
    switch (status) {
      case('Running'):
        return {color : '#3CB371'};
      case('Ended'):
        return {color : '#DC143C'};
      case('In Development'):
        return {color : '#4169E1'};
      case('To Be Determined'):
        return {color: '#FF8C00'};
      default:
        return {color: '#8B008B'};
    }
  }
}
