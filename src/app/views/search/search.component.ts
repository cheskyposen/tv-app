import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import {debounceTime, distinctUntilChanged, switchMap, takeUntil} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';
import {TvMazeService} from '../../models/services/tv-maze.service';
import {Show} from '../../models/Show';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: false
})
export class SearchComponent implements OnInit, OnDestroy {
  // creates an event to unsubscribe when emitted
  onDestroyEvent: EventEmitter<string> = new EventEmitter();
  shows$: Observable<Show[]>;
  private searchTerms = new Subject<string>();
  recentShows: Show[] = [];
  popularShows: Show[] = [];

  constructor(private tvMazeService: TvMazeService) {}
  ngOnInit() {
    this.shows$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.tvMazeService.getShows(term)),
      // unsubscribe on emit of this event
      takeUntil(this.onDestroyEvent)
    );
    // Load recent and popular shows on init
    this.loadRecentAndPopularShows();
  }
  ngOnDestroy() {
    // emits event
    this.onDestroyEvent.emit();
  }
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  // Load recent and popular shows from active seasons
  private loadRecentAndPopularShows(): void {
    this.tvMazeService.getAllShows(0).pipe(takeUntil(this.onDestroyEvent))
      .subscribe({
        next: (shows) => {
          // Filter for running shows only
          const runningShows = shows.filter(show => show.status === 'Running');
          
          // Get 5 most recent shows (by premiere date)
          this.recentShows = runningShows
            .filter(show => show.premiered && show.premiered.isValid())
            .sort((a, b) => b.premiered.valueOf() - a.premiered.valueOf())
            .slice(0, 5);
          
          // Get 5 most popular shows (by rating)
          this.popularShows = runningShows
            .filter(show => show.rating)
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 5);
        },
        error: (error) => {
          console.error('Error loading shows:', error);
        }
      });
  }
}
