import {Component, OnInit, Input, EventEmitter, OnDestroy} from '@angular/core';
import {TvMazeService} from '../../models/services/tv-maze.service';
import {Season} from '../../models/Season';
import moment from 'moment';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
  standalone: false
})
export class EpisodesComponent implements OnInit, OnDestroy {
  // creates an event to unsubscribe when emitted
  onDestroyEvent: EventEmitter<string> = new EventEmitter();
  // gets from parent component season & checked
  @Input() season: Season;
  @Input() checked: boolean;
  // mat table columns
  columnsToDisplay: string[] = [ 'title', 'summary', 'aired' ];

  constructor(
    private tvMazeService: TvMazeService
  ) {}

  ngOnInit() {
    // on init does api call to get episodes
    this.getEpisodes();
  }
  ngOnDestroy() {
    // on leave page it emits event
    this.onDestroyEvent.emit();
  }
  // call tv maze api call func and subscribes season.episodes to the returned results
  private getEpisodes(): void {
    this.tvMazeService.getEpisodes(this.season.id).pipe(takeUntil(this.onDestroyEvent))
      .subscribe(results => { this.season.episodes = results; });
  }
  // switch to show spoilers or not, default (false) does not show
  private showSpoilers(date: any): boolean {
    return !this.checked && moment().isBefore(date);
  }
}
