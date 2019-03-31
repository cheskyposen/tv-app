import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Show} from '../../models/Show';
import {TvMazeService} from '../../models/services/tv-maze.service';
import {takeUntil} from 'rxjs/operators';

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
  getShows() {
    // calls the tv maze service api call func, pipes in an event to stop subscription, next it assigns http call results to local tvShows
    this.tvMazeService.getShows(this.title).pipe(takeUntil(this.onDestroyEvent)).subscribe(results => { this.tvShows = results; });
  }
  // changes the color of status according to status
  dynamicStyles(status) {
    switch (status) {
      case('Running'):
        return {color : 'green'};
      case('Ended'):
        return {color : 'tomato'};
      case('In Development'):
        return {color : 'blue'};
      case('To Be Determined'):
        return {color: 'orange'};
    }
  }
}
