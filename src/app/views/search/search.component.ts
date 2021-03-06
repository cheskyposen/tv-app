import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import {debounceTime, distinctUntilChanged, switchMap, takeUntil} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';
import {TvMazeService} from '../../models/services/tv-maze.service';
import {Show} from '../../models/Show';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  // creates an event to unsubscribe when emitted
  onDestroyEvent: EventEmitter<string> = new EventEmitter();
  shows$: Observable<Show[]>;
  private searchTerms = new Subject<string>();

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
  }
  ngOnDestroy() {
    // emits event
    this.onDestroyEvent.emit();
  }
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
}
