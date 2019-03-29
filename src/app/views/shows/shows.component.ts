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
  onDestroyEvent: EventEmitter<string> = new EventEmitter();
  title: string;
  tvShows: Show[];

  constructor(
    private tvMazeService: TvMazeService,
    private route: ActivatedRoute
    ) {
    this.title = this.route.snapshot.paramMap.get('name');
  }

  ngOnInit() {
    this.getShows();
  }
  ngOnDestroy() {
    this.onDestroyEvent.emit();
  }
  getShows() {
    this.tvMazeService.getShows(this.title).pipe(takeUntil(this.onDestroyEvent)).subscribe(results => { this.tvShows = results; });
  }
  dynamicStyles(status) {
    switch (status) {
      case('Running'):
        return {color : 'green'};
      case('Ended'):
        return {color : 'red'};
      case('In Development'):
        return {color : 'blue'};
    }
  }
}
