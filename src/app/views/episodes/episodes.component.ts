import {Component, OnInit, Input, EventEmitter, OnDestroy} from '@angular/core';
import {TvMazeService} from '../../models/services/tv-maze.service';
import {Season} from '../../models/Season';
import * as moment from 'moment';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
})
export class EpisodesComponent implements OnInit, OnDestroy {
  onDestroyEvent: EventEmitter<string> = new EventEmitter();
  @Input() season: Season;
  @Input() checked: boolean;
  columnsToDisplay: string[] = [ 'title', 'summary', 'aired' ];

  constructor(
    private tvMazeService: TvMazeService
  ) {}

  ngOnInit() {
    this.getEpisodes();
  }
  ngOnDestroy() {
    this.onDestroyEvent.emit();
  }
  getEpisodes() {
    this.tvMazeService.getEpisodes(this.season.id).pipe(takeUntil(this.onDestroyEvent))
      .subscribe(results => { this.season.episodes = results; });
  }

  showSpoilers(date: any) {
    return !this.checked && moment().isBefore(date);
  }
}
